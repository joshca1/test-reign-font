import { useState, useEffect } from 'react';
import Header from './components/Header';
import PostSwitch from './components/PostSwitch';
import PostList from './components/PostList';
import PostSelector from './components/PostSelector';
import { useFetchPosts } from "./hooks/useFetchPosts";
import { NewsTopics, PostViewMode } from "./models/news";


const LoadingComponent = () => {
  return <div className="loading-container"> Loading... </div>;
};


function App() {
  const [newsTopic, setNewsTopic] = useState<NewsTopics>("none");
  const [numPage, setNumPage] = useState<number>(0);
  const [viewMode, setViewMode] = useState<PostViewMode>('all');

  useEffect(() => {
    const topic = localStorage.getItem("topic");
    if(topic){
      setNewsTopic(topic as NewsTopics);
    }
  }, []);

  const { posts, isLoading } = useFetchPosts({
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
    setViewMode(type)
  }

  return (
    <div className="App">
      <Header title="HACKER NEWS" />
      <div className="post-content">
        <PostSwitch option={viewMode} changeViewMode = { changeViewMode }/>
        <PostSelector changeTopic={ changeTopic } loadValue={newsTopic}/>
        {isLoading ? <LoadingComponent /> : posts ? <PostList posts={posts} /> : ""}
      </div>
    </div>
  );
}

export default App;
