import { FetchPostOptions } from "../models/news";

export const fetchPosts = async (filters: FetchPostOptions) => {
  const { topic, page } = filters;
  const numPage = page ?? 0;

  const response = await fetch(
    `https://hn.algolia.com/api/v1/search_by_date?query=${topic}&page=${numPage}`
  );

  const data = await response.json();
    console.log("Fetching posts", data)
  return data;
};
