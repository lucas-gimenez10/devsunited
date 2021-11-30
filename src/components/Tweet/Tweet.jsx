import React, { useContext } from "react";
import { userContext } from "../../contexts/userProvider";
import { deleteData, updateData } from "../../services/CRUDops";
import { ReactComponent as UserLogo } from '../../assets/userLogo.svg';
import { ReactComponent as DeleteButton } from '../../assets/trash.svg';
import { ReactComponent as Like } from '../../assets/like.svg';
import { ReactComponent as Unlike } from '../../assets/unlike.svg';
import './Tweet.css'

export const Tweet = ({ autor, tweet, id, likes, uid, photoURL }) => {
  
  const user = useContext(userContext);

  const handleDelete = async () => {
    await deleteData("tweets", id);
  };


  const handleLike = async () => {
    const likesCounter = likes ? likes + 1 : 1;
    await updateData("tweets", id, { likes: likesCounter });
  };

  return (
    <div className='tweetMainContainer'>
      <div className="tweetUsernameContainer">
        <img className='tweetUserLogo' src={photoURL} alt="user logo" />
        <p className="tweetUsername">{autor}</p>
        <p className="tweetdate"> - 5 jun.</p>
        {uid === user.uid ? <DeleteButton className='deleteButton' onClick={handleDelete}/> : null }
      </div>
        <p className='tweetText'>{tweet}</p>
        <div className="likeContainer">
          <Like className='likeButton' onClick={handleLike}>{likes ? `(${likes})` : ""}</Like>
          <p>100</p>
        </div>
    </div>
  );
};
