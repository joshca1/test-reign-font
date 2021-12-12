import Header from './components/Header';
import PostSwitch from './components/PostSwitch';
import PostList from './components/PostList';
import { useState, useEffect } from 'react';

function App() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch('https://hn.algolia.com/api/v1/search_by_date?query=angular&page=0')
      .then(response => response.json())
      .then(data => {
        console.log(data)
        setPosts(data.hits);
      })
  }, []);
  
  return (
    <div className="App">
      <Header title="HACKER NEWS" />
      <div className="post-content">
        <PostSwitch />
        <PostList posts={posts} />
      </div>
    </div>
  );
}

export default App;
