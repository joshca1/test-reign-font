import "../styles/list.css";
import FavIcon from "./FavIcon";
import moment from "moment";
interface Post {
  story_id: number;
  author: string;
  story_title: string;
  story_url: string;
  created_at: Date;
  created_at_i: number;
  fav?: boolean;
}

interface Props {
  posts: any;
  reloadPosts: () => void;
}

const addPostToFav = (e: React.MouseEvent<HTMLElement>, post: Post) => {
  e.preventDefault();
  let id = e.currentTarget.dataset.id;

  let postToStore = {
    id: id,
    story_id: post.story_id,
    created_at: post.created_at,
    story_title: post.story_title,
    story_url: post.story_url,
    author: post.author,
    created_at_i: post.created_at_i,
    fav: true,
  };
  storePostLocally(postToStore, id);
};

const storePostLocally = (post: any, id: any) => {
  let listFavPosts = localStorage.getItem("favposts");

  if (!listFavPosts) {
    localStorage.setItem("favposts", JSON.stringify([post]));
  } else {
    let existingFavPost = JSON.parse(listFavPosts);
    let localPostIndex = existingFavPost.findIndex((x: any) => x.id === id);
    if (localPostIndex !== -1) {
      existingFavPost.splice(localPostIndex, 1);
    } else {
      existingFavPost.push(post);
    }
    localStorage.setItem("favposts", JSON.stringify(existingFavPost));
  }
};

const formatDate = (date: Date) => {
  return moment(date).fromNow();
};

const postList: React.FC<Props> = ({ posts, reloadPosts }) => {
  const handleAddPost = (event: any, post: any) => {
    addPostToFav(event, post);
    reloadPosts();
  };
  return (
    <div className="post-list">
      {posts.map((post: Post) => {
        return (
          <div
            className="post-item-container"
            key={`${post.story_id}-${post.created_at_i}`}
          >
            <a
              className="post-item"
              href={post.story_url}
              rel="noreferrer"
              target="_blank"
            >
              <div className="post-item-info">
                <p className="post-date">
                  {" "}
                  <img src="clock.svg" alt="clock icon" />
                  {formatDate(post.created_at)} by {post.author}
                </p>
                <h2 className="post-item-title">{post.story_title}</h2>
              </div>
              <div className="post-item-fav">
                <div
                  data-id={`${post.story_id}-${post.created_at_i}`}
                  onClick={(event) => handleAddPost(event, post)}
                >
                  <FavIcon active={post.fav ? true : false} />
                </div>
              </div>
            </a>
          </div>
        );
      })}
    </div>
  );
};

export default postList;
