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
  const [newsType, setNewsType] = useState<NewsTopics>("angular");
  const [numPage, setNumPage] = useState<number>(0);

  const { posts, isLoading } = useFetchPosts({
    topic: newsType,
    page: numPage,
  });
 
  const changeTopic = (topic: string) => {
    console.log("changing topic to: " + topic);
    /* fetch(`https://hn.algolia.com/api/v1/search_by_date?query=${topic}&page=0`)
      .then(response => response.json())
      .then(data => {
        console.log(data)
      }) */
  }

  return (
    <div className="App">
      <Header title="HACKER NEWS" />
      <div className="post-content">
        <PostSwitch />
        <PostSelector changeTopic={ changeTopic } topic="angular"/>
        {isLoading ? <LoadingComponent /> : <PostList posts={posts} />}
      </div>
    </div>
  );
}

export default App;
