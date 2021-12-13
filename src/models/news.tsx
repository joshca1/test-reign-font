export type NewsTopics = "all" | "angular" | "react" | "vue";

export interface FetchPostOptions {
  topic: NewsTopics;
  page?: number;
}
