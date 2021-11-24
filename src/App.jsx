import './App.css';
import { Tweet } from './components/Tweet/Tweet';
import { TweetList } from './components/TweetsList/TweetList'

function App() {
  return (
    <>
      <h1>DevsUnited</h1>
      <TweetList />
      <Tweet />
    </>
  )
}

export default App;
