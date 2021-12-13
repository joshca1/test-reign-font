import { useEffect, useState } from "react";
import { FetchPostOptions } from "../models/news";
import { fetchPosts } from "../services/posts";

const isFavPostStored = (post:any) => {
    const localPost = localStorage.getItem("favposts");
    let postID = `${post.story_id}-${post.created_at_i}`;
    if (localPost) {
        const localPosts = JSON.parse(localPost);
        return localPosts.find((x: any) => x.id === postID);
    }
    return false;
}


export const useFetchPosts = (filters: FetchPostOptions) => {
  const [posts, setPosts] = useState();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    const loadPosts = async () => {
        try {
            setIsLoading(true);
            const { hits } = await fetchPosts(filters);
           
            let filteredPost = hits.filter((post:any) => {
                return post.author && post.story_title && post.story_url && post.created_at;
            }).map((post:any) => {
                return {...post, fav:isFavPostStored(post)};
            });
            
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
  };
};
