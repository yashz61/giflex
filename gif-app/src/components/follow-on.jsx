import { BsLinkedin , BsInstagram } from "react-icons/bs";

const FollowOn = () => {
    return (
        <div className='faded-text pt-2'>
            <span>Follow on:</span>
            <div className='flex gap-4 pt-3'>
    
                <a href="https://www.linkedin.com/in/yash-kumar-2350b3226"> 
                <BsLinkedin size={21}/> </a>
    
                <a href="https://www.instagram.com/yashz61"> 
                <BsInstagram  size={21}/> </a>
            </div>
        </div>
        )
}

export default FollowOn;
