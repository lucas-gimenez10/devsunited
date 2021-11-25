import React from 'react'
import { useInput } from '../../hooks/useInput'
import { addData } from '../../services/CRUDops'
import { useContext } from 'react/cjs/react.development';
import { userContext } from '../../contexts/userProvider';

export const Tweet = () => {

    const { displayName } = useContext(userContext);
    const [ tweet, handleTweet ] = useInput()
    const [ user, handleUser ] = useInput()

    const handleSetData = async () => {
        await addData("tweets", { user: displayName , tweet });
    }



    return (
        <>   
            <input type="text" onChange={handleUser} value={user} />
            <input type="text" onChange={handleTweet} value={tweet} />
            <button onClick={handleSetData}>Enviar</button>
        </>
    )
}