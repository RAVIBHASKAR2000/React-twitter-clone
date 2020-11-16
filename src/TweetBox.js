import React, {useState} from 'react';
import './TweetBox.css';
import { Avatar, Button } from "@material-ui/core";
import db from './firebase';


function Tweetbox(){
    const [tweetMessage, setTweetMessage] = useState("");
    const [tweetImage, setTweetImage] = useState("");
    
    const sendTweet = e =>{
        e.preventDefault();
        db.collection('posts').add({
            displayName:'Ravi',
            username:'ravi159',
            verified:true,
            text:tweetMessage,
            image: tweetImage,
            avatar:"https://avatarfiles.alphacoders.com/183/183839.jpg"
        });

        setTweetMessage("");
        setTweetImage("");

    }
    
    
    
    return (
        <div className="tweetBox">
           <form>
               <div className="tweetBox__input">
                <Avatar src="https://pbs.twimg.com/profile_images/1107917834603163648/t6wK6px7_400x400.jpg" />
                <input 
                value={tweetMessage} 
                onChange={(e) => setTweetMessage(e.target.value) }
                placeholder="what's happening?" type="text"></input>
                </div>
                
                
                <input className="tweetBox__imageInput"  
                value={tweetImage}
                onChange={(e)=> setTweetImage(e.target.value)}
                placeholder="Optional: Enter image URL"
                 type="text"></input> 
                
               
               <Button onClick={sendTweet} type="submit" className="tweetBox__tweetButton" >Tweet</Button>
           </form> 

        </div>
    );

}


export default Tweetbox;