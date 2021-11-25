import './App.css';
import SignIn from './components/SignIn/SignIn';
import { Tweet } from './components/Tweet/Tweet';
import { TweetList } from './components/TweetsList/TweetList'
import { useContext } from 'react';
import { userContext } from './contexts/userProvider';
import { SignOut } from './components/SignOut/SignOut'

function App() {

  const user = useContext(userContext)

  return (
    <>
      {user ? (<>
        <SignOut/>
        <TweetList />
        <Tweet />
      </>) : (
        <SignIn/>
      )}
    </>
  )
}

export default App;
