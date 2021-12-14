import { useEffect, useState } from "react";
import { FetchPostOptions } from "../models/news";
import { fetchPosts } from "../services/posts";
import { filterValidPost } from '../helper/post'


export const useFetchPosts = (filters: FetchPostOptions) => {
  const [posts, setPosts] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    const loadPosts = async () => {
        try {
            setIsLoading(true);
            const { hits } = await fetchPosts(filters);
           
            let filteredPost = filterValidPost(hits)
            
            setPosts(filteredPost);
        } catch (error) {
            console.error("There was an error fetching the posts");
        } finally {
            setIsLoading(false);
        }
    };
    if (filters.topic !== 'none')
    loadPosts();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filters.topic, filters.page]);

  return {
    posts,
    isLoading,
    setPosts
  };
};
