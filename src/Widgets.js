import React from 'react';
import './Widgets.css';
import {
    TwitterTimelineEmbed,
    TwitterShareButton,
    TwitterTweetEmbed,
} from "react-twitter-embed";
import SearchIcon from '@material-ui/icons/Search';


function Widgets(){
    return(
        <div className="widgets">
            <div className="widgets__input">
                <SearchIcon className="widgets__searchIcon" />
                <input placeholder="Search Twitter" type="text" />

            </div>


            <div className="widgets__widgetContainer">
                <h2>What's happening</h2>
                 <TwitterTweetEmbed tweetId={"1327576482512728064"}/>

                 <TwitterTimelineEmbed 
                    sourceType="profile"
                    screenName="RaviBha62050522"
                    options={{height :400}} 
                    />


                 <TwitterShareButton 
                 url={"https://www.facebook.com/ravi.bhaskar.1865"} 
                 options={{ text:"Happy diwali", via:"RaviBha6205052"}}  />
            </div>
        </div>
        );
}


export default Widgets;