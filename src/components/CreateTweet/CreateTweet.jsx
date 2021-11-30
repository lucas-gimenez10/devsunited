import React, { useContext } from 'react'
import { userContext } from '../../contexts/userProvider';
import { addData } from '../../services/CRUDops'
import { useInput } from '../../hooks/useInput'
import { ReactComponent as UserLogo } from '../../assets/userLogo.svg';

import './CreateTweet.css'

export const CreateTweet = () => {
    const { uid, email, displayName, photoURL } = useContext(userContext);
    const [ tweet, handleTweet ] = useInput()

    const handleSetData = async () => {
        await addData("tweets", {
            tweet,
            uid,
            email,
            autor: displayName,
            photoURL,
        });
    };



    return (
        <div className='containerCreateTweet'>
            <div className='firstContainer'>     
                <UserLogo className='createTweetUserLogo'/>  
                <textarea type="text" placeholder='What’s happening?' onChange={handleTweet} value={tweet} />
            </div> 
            <div className="innerContainerCreateTweet">
                <span className='colorBeta'>200 max.</span>
                <button className='buttonPost' onClick={handleSetData}>post</button>
            </div>
        </div>
    )
}