import React, { useContext } from 'react/cjs/react.development';
import { userContext } from '../../contexts/userProvider';
import { addData } from '../../services/CRUDops'
import { useInput } from '../../hooks/useInput'

export const CreateTweet = () => {

    const { displayName, uid, email } = useContext(userContext);
    const [ tweet, handleTweet ] = useInput()

    const handleSetData = async () => {
        await addData("tweets", {
            tweet,
            uid,
            email,
            autor: displayName
        });
    };



    return (
        <>   
            <input type="text" onChange={handleTweet} value={tweet} />
            <button onClick={handleSetData}>Enviar</button>
        </>
    )
}