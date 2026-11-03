import { useCallback, useEffect, useState } from 'react';
import { getSampleChapters } from '../data/sampleStories';
import { watchStoryChapters } from '../services/storyService';
import type { StoryChapter } from '../types/story';

interface StoryChaptersState {
  chapters: StoryChapter[];
  loading: boolean;
  error: Error | null;
  retry: () => void;
}

export function useStoryChapters(storyId: string): StoryChaptersState {
  const [chapters, setChapters] = useState<StoryChapter[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);
  const [attempt, setAttempt] = useState(0);

  useEffect(() => {
    let active = true;
    setLoading(true);
    setError(null);

    const sampleChapters = getSampleChapters(storyId);
    if (sampleChapters) {
      setChapters(sampleChapters);
      setLoading(false);
      return () => {
        active = false;
      };
    }

    const unsubscribe = watchStoryChapters(
      storyId,
      (nextChapters) => {
        if (active) {
          setChapters(nextChapters);
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
  }, [attempt, storyId]);

  const retry = useCallback(() => {
    setAttempt((current) => current + 1);
  }, []);

  return { chapters, loading, error, retry };
}
