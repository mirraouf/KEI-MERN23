import angry from '../images/svg/angry.svg';
import dislike from '../images/svg/dislike.svg';
import heart from '../images/svg/heart.svg';
import like from '../images/svg/like.svg';
import sad from '../images/svg/sad.svg';
import smile from '../images/svg/smile.svg';

const emotionsMap={
    angry,
    dislike,
    heart,
    like,
    sad,
    smile
};

function EmotionComponent({type}){
return (
//  <img src={emotionsMap[type]} width="25px" height="25px"/>
<img src={emotionsMap[type]} width="25px" height="25px"/>

);

}
export default EmotionComponent;