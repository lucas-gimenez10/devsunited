import React from 'react';
import { Tweet } from '../Tweet/Tweet';
import useTweet from "../../hooks/useTweet";


export const TweetsList = () => {
    const tweets = useTweet();
    return (
      <div>
        {tweets.map((tweet) => (
          <Tweet {...tweet} key={tweet.id} />
        ))}
      </div>
    );
  };