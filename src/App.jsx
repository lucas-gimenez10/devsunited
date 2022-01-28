import './App.css';
import { TweetsList } from './components/TweetsList/TweetsList'
import { useContext, useState } from 'react';
import { userContext } from './contexts/userProvider';
import { SignOut } from './components/SignOut/SignOut'
import { LoggedOut } from './components/LoggedOut/LoggedOut';
import { CreateTweet } from './components/CreateTweet/CreateTweet';
import { CreateUser } from './components/CreateUser/CreateUser';
import { Header } from './components/Header/Header';
import { getUsername } from './services/CRUDops';

function App() {

  const user = useContext(userContext);
  const [ usrnam, setUsrnam ] = useState('');

  if(user) {getUsername(user)
    .then(res =>{
      setUsrnam(res)
    })}
    console.log(usrnam)

  return (
    <div className="app">
      {user ? (
      <>
        {/* CONSULTAR FAUS */}
        { usrnam !== undefined && usrnam !== '' ? (
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
