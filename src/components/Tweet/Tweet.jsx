import React from 'react'
import { useInput } from '../../hooks/useInput'
import { addData } from '../../services/CRUDops'

export const Tweet = () => {

    const [ tweet, handleTweet ] = useInput()
    const [ user, handleUser ] = useInput()

    const handleSetData = async () => {
        await addData("tweets", { user, tweet });
    }

    return (
        <>   
            <input type="text" onChange={handleUser} value={user} />
            <input type="text" onChange={handleTweet} value={tweet} />
            <button onClick={handleSetData}>Enviar</button>
        </>
    )
}