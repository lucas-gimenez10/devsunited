import React, { useContext } from 'react'
import { userContext } from '../../contexts/userProvider';
import { addData } from '../../services/CRUDops'
import { useInput } from '../../hooks/useInput'

export const CreateTweet = () => {
    const user = useContext(userContext);
    const [ tweet, handleTweet ] = useInput()

    const handleSetData = async () => {
        await addData("tweets", {
            tweet,
            uid: user.uid,
            email: user.email,
            autor: user.displayName
        });
    };



    return (
        <>   
            <input type="text" onChange={handleTweet} value={tweet} />
            <button onClick={handleSetData}>Enviar</button>
        </>
    )
}