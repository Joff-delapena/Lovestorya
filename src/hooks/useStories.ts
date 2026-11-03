import { useCallback, useEffect, useState } from 'react';
import { SAMPLE_STORIES } from '../data/sampleStories';
import { watchPublishedStories } from '../services/storyService';
import type { Story } from '../types/story';

interface StoriesState {
  stories: Story[];
  loading: boolean;
  error: Error | null;
  retry: () => void;
}

function mergeStories(remoteStories: Story[]): Story[] {
  const storiesById = new Map(
    SAMPLE_STORIES.map((story) => [story.id, story]),
  );
  for (const story of remoteStories) {
    storiesById.set(story.id, story);
  }
  return Array.from(storiesById.values()).sort(
    (a, b) => b.updatedAt - a.updatedAt,
  );
}

export function useStories(): StoriesState {
  const [stories, setStories] = useState<Story[]>(() => mergeStories([]));
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);
  const [attempt, setAttempt] = useState(0);

  useEffect(() => {
    let active = true;
    setLoading(true);
    setError(null);

    const unsubscribe = watchPublishedStories(
      (nextStories) => {
        if (active) {
          setStories(mergeStories(nextStories));
          setLoading(false);
          setError(null);
        }
      },
      (nextError) => {
        if (active) {
          setLoading(false);
          setError(nextError);
        }
      },
    );

    return () => {
      active = false;
      unsubscribe();
    };
  }, [attempt]);

  const retry = useCallback(() => {
    setAttempt((current) => current + 1);
  }, []);

  return { stories, loading, error, retry };
}
