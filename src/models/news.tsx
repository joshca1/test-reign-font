export type NewsTopics = "none" | "angular" | "react" | "vue";
export type PostViewMode = "all" | "favs";
export interface FetchPostOptions {
  topic: NewsTopics;
  page?: number;
}
