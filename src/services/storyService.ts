import {
  collection,
  limit,
  onSnapshot,
  orderBy,
  query,
  Timestamp,
  where,
  type QuerySnapshot,
  type Unsubscribe,
} from 'firebase/firestore';
import { db } from '../config/firebase';
import type { Story, StoryChapter } from '../types/story';

const STORIES_COLLECTION = 'stories';
const STORY_FEED_LIMIT = 50;

function toStoryChapter(
  id: string,
  data: Record<string, unknown>,
): StoryChapter {
  if (typeof data.title !== 'string' || data.title.trim().length === 0) {
    throw new Error(`Chapter "${id}" is missing a valid title.`);
  }
  if (typeof data.content !== 'string' || data.content.trim().length === 0) {
    throw new Error(`Chapter "${id}" is missing valid content.`);
  }
  if (typeof data.order !== 'number' || !Number.isFinite(data.order)) {
    throw new Error(`Chapter "${id}" is missing a valid order number.`);
  }

  return {
    id,
    title: data.title.trim(),
    content: data.content,
    order: data.order,
  };
}

function toStory(id: string, data: Record<string, unknown>): Story {
  if (typeof data.title !== 'string' || data.title.trim().length === 0) {
    throw new Error(`Story "${id}" is missing a valid title.`);
  }

  const updatedAt =
    data.updatedAt instanceof Timestamp
      ? data.updatedAt.toMillis()
      : data.updatedAt instanceof Date
        ? data.updatedAt.getTime()
        : 0;

  return {
    id,
    title: data.title.trim(),
    authorName:
      typeof data.authorName === 'string' && data.authorName.trim()
        ? data.authorName.trim()
        : 'Unknown author',
    description:
      typeof data.description === 'string' ? data.description : '',
    genre:
      typeof data.genre === 'string' && data.genre.trim()
        ? data.genre.trim()
        : 'Uncategorized',
    coverUrl: typeof data.coverUrl === 'string' ? data.coverUrl : undefined,
    credits: typeof data.credits === 'string' ? data.credits : undefined,
    updatedAt,
  };
}

function isMissingIndexError(error: Error): boolean {
  return (
    'code' in error &&
    error.code === 'failed-precondition' &&
    /index/i.test(error.message)
  );
}

function publishStories(
  snapshot: QuerySnapshot,
  onStories: (stories: Story[]) => void,
  onError: (error: Error) => void,
) {
  try {
    const stories = snapshot.docs
      .map((document) => toStory(document.id, document.data()))
      .sort((a, b) => b.updatedAt - a.updatedAt);
    onStories(stories);
  } catch (cause) {
    onError(cause instanceof Error ? cause : new Error(String(cause)));
  }
}

export function watchStoryChapters(
  storyId: string,
  onChapters: (chapters: StoryChapter[]) => void,
  onError: (error: Error) => void,
): Unsubscribe {
  const chaptersQuery = query(
    collection(db, STORIES_COLLECTION, storyId, 'chapters'),
    orderBy('order', 'asc'),
  );

  return onSnapshot(
    chaptersQuery,
    (snapshot) => {
      try {
        onChapters(
          snapshot.docs.map((document) =>
            toStoryChapter(document.id, document.data()),
          ),
        );
      } catch (cause) {
        onError(cause instanceof Error ? cause : new Error(String(cause)));
      }
    },
    onError,
  );
}

export function watchPublishedStories(
  onStories: (stories: Story[]) => void,
  onError: (error: Error) => void,
): Unsubscribe {
  const storiesCollection = collection(db, STORIES_COLLECTION);
  const indexedStoriesQuery = query(
    storiesCollection,
    where('published', '==', true),
    orderBy('updatedAt', 'desc'),
    limit(STORY_FEED_LIMIT),
  );

  let active = true;
  let usingFallback = false;
  let unsubscribe: Unsubscribe = () => {};

  unsubscribe = onSnapshot(
    indexedStoriesQuery,
    (snapshot) => {
      if (active) {
        publishStories(snapshot, onStories, onError);
      }
    },
    (error) => {
      if (!active) {
        return;
      }

      if (!usingFallback && isMissingIndexError(error)) {
        usingFallback = true;
        unsubscribe();
        const fallbackStoriesQuery = query(
          storiesCollection,
          where('published', '==', true),
          limit(STORY_FEED_LIMIT),
        );
        unsubscribe = onSnapshot(
          fallbackStoriesQuery,
          (snapshot) => {
            if (active) {
              publishStories(snapshot, onStories, onError);
            }
          },
          (fallbackError) => {
            if (active) {
              onError(fallbackError);
            }
          },
        );
        return;
      }

      onError(error);
    },
  );

  return () => {
    active = false;
    unsubscribe();
  };
}
