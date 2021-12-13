import { useState, } from 'react';
import Header from './components/Header';
import PostSwitch from './components/PostSwitch';
import PostList from './components/PostList';
import PostSelector from './components/PostSelector';
import { useFetchPosts } from "./hooks/useFetchPosts";
import { NewsTopics } from "./models/news";


const LoadingComponent = () => {
  return <div className="loading-container"> Loading... </div>;
};

function App() {
  const [newsTopic, setNewsTopic] = useState<NewsTopics>("all");
  const [numPage, setNumPage] = useState<number>(0);

  const { posts, isLoading } = useFetchPosts({
    topic: newsTopic,
    page: numPage,
  });
 
  const changeTopic = (option: any) => {
    setNewsTopic(option.value);
  }

  const changePage = (option: any) => {
    setNumPage(option.value);
  }

  return (
    <div className="App">
      <Header title="HACKER NEWS" />
      <div className="post-content">
        <PostSwitch />
        <PostSelector changeTopic={ changeTopic } topic="angular"/>
        {isLoading ? <LoadingComponent /> : posts ? <PostList posts={posts} /> : ""}
      </div>
    </div>
  );
}

export default App;
