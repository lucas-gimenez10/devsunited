import { onSnapshot } from '@firebase/firestore'
import React, { useState, useEffect } from 'react'
import { deleteData, getCollection } from '../../services/CRUDops'

export const TweetList = () => {

    const [tweetList, setTweetList] = useState([]);

    useEffect( 
        // eslint-disable-next-line react-hooks/exhaustive-deps
        async () => {
            const unSubscribe = await onSnapshot(getCollection("tweets"),(data) => {
                setTweetList(data.docs.map(doc => {
                    return {...doc.data(), id: doc.id};
                }))
            })
            
            return () => {unSubscribe()}
            
    }, []);

        const handleDeleteData = (id) => {
            deleteData('tweets', id)
        }

    return (
        <>
            <h1>Devs United</h1>
            <h2>Tweets List</h2>
            {/* {userState ? (
                        <>
                            <div>
                                <img src={`${userState.photoURL}`} alt="" />
                                <p>Hola {userState.displayName}</p>
                                <button onClick={logout}>Log Out</button>
                            </div>
                        </>
                    ) : (
                            <button onClick={loginWithGoogle}>Login With Google</button>
                        )
            } */}
            {
                tweetList.map((tweet) => {
                    return(
                        <div>
                            <h3>{tweet.user}</h3>
                            <p>{tweet.tweet}</p>
                            <button onClick={() => handleDeleteData(tweet.id)}>Eliminar</button>
                            <button>Like</button>
                        </div>
                    ) 
                })
            }
        </>
    )
}