export type NewsTopics = "none" | "angular" | "react" | "vue";
export type PostViewMode = "all" | "favs";
export interface FetchPostOptions {
  topic: NewsTopics;
  page?: number;
}

export interface Post {
  story_id: number;
  author: string;
  story_title: string;
  story_url: string;
  created_at: Date;
  created_at_i: number;
  fav?: boolean;
}

