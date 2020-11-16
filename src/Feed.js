import React, { useState, useEffect } from 'react';
import './Feed.css';
import TweetBox from './TweetBox';
import Posts from './Posts';
import db from './firebase';
import FlipMove from 'react-flip-move';

function Feed(){
  const [posts , setPosts] = useState([]);
    
  useEffect (()=>{
    db.collection('posts').onSnapshot(snapshot => (
        setPosts(snapshot.docs.map( doc => doc.data()))
    ))
  },[])
  console.log(posts);
    return(
        <div  className="feed">
          {/*Header */}
          <div  className="feed__header">
          <h2> Home</h2>
          </div>

       
          {/* tweetbox */} 
          <TweetBox/>
          <FlipMove>
          {posts.map(post => (

            <Posts
             key={post.text}
            displayName={post.displayName}
            username={post.username}
            verified={post.verified}
            text={post.text}
            avatar={post.avatar}
            image={post.image}
            />
           


          ))}
          </FlipMove>
         
          {/*post*/}
          
        </div>
    );
}


export default Feed;