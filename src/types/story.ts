export interface Story {
  id: string;
  title: string;
  authorName: string;
  description: string;
  genre: string;
  coverUrl?: string;
  credits?: string;
  updatedAt: number;
}

export interface StoryChapter {
  id: string;
  title: string;
  content: string;
  order: number;
}
