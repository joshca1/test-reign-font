import Header from './components/Header';
import PostSwitch from './components/PostSwitch';
function App() {
  return (
    <div className="App">
      <Header title="HACKER NEWS" />
      <div className="post-content">
        <PostSwitch/>
      </div>
    </div>
  );
}

export default App;
