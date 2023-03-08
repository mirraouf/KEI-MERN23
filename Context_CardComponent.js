import { useState } from "react";
import EditCardComponent from "./EditCardComponent";
import EmotionComponent from "./EmotionComponent";
import { useContext } from "react";
import PostsContext from "../context/post"

function getRandomEmotions() {
  const emotions = ['angry', 'dislike', 'heart', 'like', 'sad', 'smile'];
  return emotions[Math.floor(Math.random() * emotions.length)];
}

function CardComponent({ post, onDelete, onEdit }) {
  // console.log(props.images);
  const [likes, setLikes] = useState(0);
  const [emotions, setEmotions] = useState([]);
  const [showedit, setShowEdit] = useState(false);


  const handleClicks = () => {
    setLikes(likes + 1);
    setEmotions([...emotions, getRandomEmotions()]);
    console.log(emotions);
  };


const  obj=useContext(PostsContext);


  const displayEmotions = emotions.map((emotion, index) => {
    return <EmotionComponent type1={emotion} />
  });
  const handleDeleteClick = (e) => {
    onDelete(post.id)
  }

  const handleEditClick = (e) => {
    setShowEdit(!showedit);
  };
  
  let content = <div>{post.title}</div>;
  if (showedit) {
    content = <EditCardComponent post={post} onEdit={onEdit} />;
  }



  return (<div>
    {/* <div><img src={images} /></div> */}
    <div>{obj.count}<button onClick={obj.incrementCount}>Count</button></div>
    <div><button onClick={handleEditClick}>E</button></div>
    <div><button onClick={handleDeleteClick}>X</button></div>
    {content}
    <div>{post.body}</div>
    <div onClick={handleClicks}>Likes:{likes} {displayEmotions}
      <br />
    </div>

  </div>);

}
export default CardComponent;