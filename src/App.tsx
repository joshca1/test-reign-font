import { useState, useEffect } from 'react';
import Header from './components/Header';
import PostSwitch from './components/PostSwitch';
import PostList from './components/PostList';
import PostSelector from './components/PostSelector';
import { useFetchPosts } from "./hooks/useFetchPosts";
import { NewsTopics, PostViewMode, Post } from "./models/news";
import { isFavPostStored } from './helper/post'

const LoadingComponent = () => {
  return <div className="loading-container"> Loading... </div>;
};

const getFavPosts = () =>{
  return localStorage.getItem("favposts") ? JSON.parse(localStorage.getItem("favposts") || "[]") : [];
}

function App() {
  const [newsTopic, setNewsTopic] = useState<NewsTopics>("none");
  const [numPage, setNumPage] = useState<number>(0);
  const [viewMode, setViewMode] = useState<PostViewMode>('all');
  const [favPosts, setFavPosts] = useState<string[]>(getFavPosts);

  useEffect(() => {
    const topic = localStorage.getItem("topic");
    if(topic){
      setNewsTopic(topic as NewsTopics);
    }
  }, []);

  const { posts, isLoading, setPosts } = useFetchPosts({
    topic: newsTopic,
    page: numPage,
  });
 
  const changeTopic = (option: any) => {
    localStorage.setItem("topic", option.value)
    setNewsTopic(option.value);
  }

  const changePage = (option: any) => {
    setNumPage(option.value);
  }

  const changeViewMode = (type: PostViewMode) => {
    setFavPosts(getFavPosts)
    setViewMode(type)
  }
  const reloadPosts = () => {
      let postWithFav = posts.map(post => {
        post.fav = isFavPostStored(post);
        return post;
      })
      setPosts(postWithFav);
      setFavPosts(getFavPosts)
  }

  return (
    <div className="App">
      <Header title="HACKER NEWS" />
      <div className="post-content">
        <PostSwitch option={viewMode} changeViewMode = { changeViewMode } />
        {viewMode==='all' && <PostSelector changeTopic={ changeTopic } loadValue={newsTopic}/>}
        {isLoading ? <LoadingComponent /> : posts ? <PostList reloadPosts={reloadPosts} posts={viewMode === 'all' ? posts : favPosts} /> : ""}
      </div>
    </div>
  );
}

export default App;
