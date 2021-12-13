import '../styles/list.css';
import FavIcon from './FavIcon'
interface Post {
    story_id: number;
    author: string;
    story_title: string;
    story_url: string;
    created_at: Date;
    fav?: boolean;
}

interface Props {
    posts: any
}
const addPostToFav = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    console.log(e.currentTarget.dataset.id);
    
}

const postList: React.FC<Props> = ({ posts }) => {
    return (
        <div className="post-list">
            {posts.map((post: Post) => {
                return (
                    <div className="post-item-container" key={`${post.story_id}-${post.created_at}`}>
                        <a className="post-item" href={post.story_url} rel="noreferrer" target="_blank">
                            <div className="post-item-info">
                                <p className="post-date"> <img src="clock.svg" alt="clock icon" />{post.created_at}</p>
                                <h2 className="post-item-title">{post.story_title}</h2>
                            </div>
                            <div className="post-item-fav">
                                <div data-id={`${post.story_id}-${post.created_at}`} onClick={addPostToFav}>
                                    <FavIcon  active={true}/>
                                </div>
                            </div>
                        </a>
                    </div>
                )
            })}
        </div>
    )
};

export default postList;