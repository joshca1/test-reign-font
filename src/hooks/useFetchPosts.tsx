import { useEffect, useState } from "react";
import { FetchPostOptions } from "../models/news";
import { fetchPosts } from "../services/posts";

export const useFetchPosts = (filters: FetchPostOptions) => {
  const [posts, setPosts] = useState();
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const loadPosts = async () => {
        try {
        setIsLoading(true);
        const { hits } = await fetchPosts(filters);
        setPosts(hits);
      } catch (error) {
        console.error("There was an error fetching the posts");
      } finally {
        setIsLoading(false);
      }
    };

    loadPosts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filters.topic, filters.page]);

  return {
    posts,
    isLoading,
  };
};
