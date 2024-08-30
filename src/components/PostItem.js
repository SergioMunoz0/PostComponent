import {useState} from 'react'

import profilePicture from '../assets/images/profilePhoto.jpg'
import shareIcon from '../assets/icons/share-icon.png'
import commentIcon from '../assets/icons/commentIcon.png'
import hornsIcon from '../assets/icons/horns-sing.png'
import earth from '../assets/icons/earth.png'
import threePoint from '../assets/icons/threePoint.png'
import verifiedUser from '../assets/icons/verified-user.png'

import "../styles/css/postitem.css"
import "../styles/css/main.css"

export default function PostList(props){

    const [socialNumbers,setSocialNumbers] = useState({
            Likes: 0,
            comments: 0,
            shares: 0,
            isSet: false
        })
    
    //datos simulados para los likes, comments y shares
    function handleSocialNumber(){
        if(!socialNumbers.isSet){
            setSocialNumbers({
                Likes: Math.floor(Math.random() * 1000),
                comments: Math.floor(Math.random() * 1000),
                shares: Math.floor(Math.random() * 1000),
                isSet: true
            })
        }
    }
    
    return(
        <div className={props.isFirst ? "postItem-container animationNewElement": "postItem-container"}>
            <div className="postItem-header">
                <div className="postItem-userInfo">
                    <img className="profilePicture" src={profilePicture} alt="ProfilePicture" />
                    <p> Sergio Carrillo</p>
                    <img className="verifiedUser" src={verifiedUser} alt="verifiedUser" />
                    <span className="point"> . </span>
                    <p className="postTime"> 1 min</p>
                    <div className="icon-container">
                        <img className="visibility-icon" src={earth} alt="visibility" />
                    </div>  
                </div>
                
                <div className="threePoint-container">
                    <img className="threePoint-icon" src={threePoint} alt="threePoint" />
                </div>
            </div>  
            
            <div className="postItem-main">
                <p>{props.text}</p>
            </div>

            <span className="divisorLine"></span>

            <div className="postItem-socialOptions" onLoad={handleSocialNumber()}>
                <span>
                    <div className="social-container">
                        <img className="social-icon hornsSing-icon" src={hornsIcon} alt="hornsIcon" />
                         <p>{socialNumbers.Likes} Likes</p> 
                        </div>
                </span>
                
                <span>
                    <div className="social-container">
                        <img className="social-icon comments-icon" src={commentIcon} alt="commentIcon" />
                        <p>{socialNumbers.comments} comments</p>
                    </div>
                </span>

                <span>
                    <div className="social-container">
                        <img className="social-icon" src={shareIcon} alt="shareIcon" />
                        <p>{socialNumbers.shares} shares</p> 
                    </div>
                </span>
            </div>
            
        </div>
    )
}