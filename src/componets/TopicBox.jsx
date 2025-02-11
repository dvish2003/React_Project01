import React from 'react';
import './topicBox.css'

export default function TopicBox() {
    const topic = "My Favourite Topic is Java"; //dynamic components
    const Item = "And PHP"; //dynamic components
    return (
        <div>
<div className="topicBox">
  {/*  <span>
        This is A Topic
        //Manual Components
    </span>*/}

  {/*  <span>
        {topic} {Item}
         Dynamic Components
    </span>*/}
   {/* <span>
        {alert("Hello Vishan")}
        //this is a alert message
    </span>*/}
</div>
        </div>
    )
}
