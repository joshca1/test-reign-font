import '../styles/list.css';
import FavIcon from './FavIcon'
interface Post {
    story_id: number;
    author: string;
    story_title: string;
    story_url: string;
    created_at: Date;
}

interface Props {
    posts: any
}

const postList: React.FC<Props> = ({ posts }) => {
    return (
        <div className="post-list">
            {posts.map((post: Post) => {
                return (
                    <div className="post-item-container" key={post.story_id}>
                        <a className="post-item" href={post.story_url} rel="noreferrer" target="_blank">
                            <div className="post-item-info">
                                <p className="post-date"> <img src="clock.svg" alt="clock icon" />{post.created_at}</p>
                                <h2 className="post-item-title">{post.story_title}</h2>
                            </div>
                            <div className="post-item-fav">
                                <FavIcon active={true}/>
                            </div>
                        </a>
                    </div>
                )
            })}
        </div>
    )
};

export default postList;