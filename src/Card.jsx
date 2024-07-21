import { useState } from "react";
const Card = ({ post }) => {
  const [liked, setLiked] = useState(false);
  const handleLike = () => {
    setLiked(true);
  };
  return (
    <>
      <div className="card">
        <div className="info">
          <img src={post.userImg} className="userImg" alt="" />
          <span>{post.fullname}</span>
        </div>
        <img src={post.postImg} className="postImg" alt="" />
        <div className="interections">
          {liked ? (
            <img src={post.liked} alt="" className="cardIcon" />
          ) : (
            <img
              src={post.like}
              alt=""
              className="cardIcon"
              onClick={handleLike}
            />
          )}

          <img src={post.comments} alt="" className="cardIcon" />
          <img src={post.share} alt="" className="cardIcon" />
        </div>
      </div>
    </>
  );
};
export default Card;
