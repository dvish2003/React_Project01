import React from 'react';
import NavBar from "../componets/NavBar";
import TopicBox from "../componets/TopicBox";

export default function Home() {
    return (
        <div>
            <NavBar/>
            {/*use One Prpos*/
            /*<TopicBox food="Kottu"/>
            <TopicBox food="Rice"/>
            <TopicBox food="Hopppers"/>*/}

            {/*use multi props*/}
            <TopicBox food="Kottu" price="Rs 250"/>
            <TopicBox food="Rice" price="Rs 304"/>
            <TopicBox food="Hopppers" price="Rs 450"/>

        </div>
    )
}
