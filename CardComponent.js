import { useState } from "react";   
import EmotionComponent from "./EmotionComponent";
function getRandomEmotions(){
  const emotions=['angry','dislike','heart','like','sad','smile'];
  return emotions[Math.floor(Math.random()*emotions.length)];
}

function CardComponent({title, images}){
   // console.log(props.images);
 const  [likes, setLikes] = useState(0);
const [emotions,setEmotions]=useState([]);



 const handleClicks=()=>{
setLikes(likes+1);
setEmotions([...emotions,getRandomEmotions()]);
console.log(emotions);
 };
 const displayEmotions=emotions.map((emotion,index)=>{
  return <EmotionComponent type={emotion} />
   });
return (<div>
    <div><img src={images} /></div>
    <div>{title}</div>

    <div onClick={handleClicks}>Likes:{likes} {displayEmotions}
    
    </div>

</div>);

}
export default CardComponent;