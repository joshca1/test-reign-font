export const isFavPostStored = (post: any) => {
  const localPost = localStorage.getItem("favposts");
  let postID = `${post.story_id}-${post.created_at_i}`;
  if (localPost) {
    const localPosts = JSON.parse(localPost);
    return localPosts.find((x: any) => x.id === postID);
  }
  return false;
};

export const filterValidPost = (post: any) => {
  return post
    .filter((post: any) => {
      return (
        post.author && post.story_title && post.story_url && post.created_at
      );
    })
    .map((post: any) => {
      return { ...post, fav: isFavPostStored(post) };
    });
};
