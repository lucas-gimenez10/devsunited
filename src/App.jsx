import './App.css';
import { TweetsList } from './components/TweetsList/TweetsList'
import { useContext } from 'react';
import { userContext } from './contexts/userProvider';
import { SignOut } from './components/SignOut/SignOut'
import { LoggedOut } from './components/LoggedOut/LoggedOut';
import { CreateTweet } from './components/CreateTweet/CreateTweet';
import { CreateUser } from './components/CreateUser/CreateUser';
import { Header } from './components/Header/Header';
import { getUsername } from './services/CRUDops';

function App() {

  const user = useContext(userContext)


  return (
    <div className="app">
      {user ? (
      <>
        {/* CONSULTAR FAUS */}
        { ('username' in getUsername(user)) ? (
          <>
            <SignOut/>
            <Header />
            <CreateTweet />
            <TweetsList />
          </>
        ) : (
          <CreateUser />
        )}
      </>) : (
        <LoggedOut/>
      )}
    </div>
  )
}

export default App;
