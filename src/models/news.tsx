export type NewsTopics = "angular" | "react" | "vue";

export interface FetchPostOptions {
  topic: NewsTopics;
  page?: number;
}
