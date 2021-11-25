import './App.css';
import { Tweet } from './components/Tweet/Tweet';
import { TweetList } from './components/TweetsList/TweetList'
import { useContext } from 'react';
import { userContext } from './contexts/userProvider';
import { SignOut } from './components/SignOut/SignOut'
import { LoggedOut } from './components/LoggedOut/LoggedOut';

function App() {

  const user = useContext(userContext)

  return (
    <div className="app">
      {user ? (<>
        <SignOut/>
        <TweetList />
        <Tweet />
      </>) : (
        // <SignIn/>
        <LoggedOut/>
      )}
    </div>
  )
}

export default App;
