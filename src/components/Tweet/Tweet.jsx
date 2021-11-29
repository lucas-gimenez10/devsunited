import React, { useContext } from "react";
import { userContext } from "../../contexts/userProvider";
import { deleteData, updateData } from "../../services/CRUDops";

export const Tweet = ({ autor, tweet, id, likes, email, uid }) => {
  
  const user = useContext(userContext);

  const handleDelete = async () => {
    await deleteData("tweets", id);
  };


  const handleLike = async () => {
    const likesCounter = likes ? likes + 1 : 1;
    await updateData("tweets", id, { likes: likesCounter });
  };

  return (
    <div>
      <p>{tweet}</p>
      <p>{autor}</p>
      <p>{email}</p>
      <button onClick={handleLike}>Like {likes ? `(${likes})` : ""}</button>
      {uid === user.uid ? <button onClick={handleDelete}>Delete</button> : null }
    </div>
  );
};
