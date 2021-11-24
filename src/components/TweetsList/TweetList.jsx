import { onSnapshot } from '@firebase/firestore'
import React, { useState, useEffect } from 'react'
import { deleteData, getCollection } from '../../services/CRUDops'

export const TweetList = () => {

    const [tweetList, setTweetList] = useState([]);

    useEffect( 
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
            <h1>Tweets List</h1>
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