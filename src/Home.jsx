import React from "react";
import Title from "./Tiltle";
import Content2 from "./Content2";
import Card from "./Card";
import CardData, { CardData2 } from "./CardData";
import Title2 from "./Title2";
import Content3 from "./Content3";
import Heading from "./Heading";
import Icons from "./Icons";

const NCard = (val) => {
    return (
        <>
       <Card 
        imgsrc = {val.imgsrc}
        heading = {val.heading}
        paragraph = {val.paragraph}
        button = {val.button}
        />
        </>
  
    )
  
  }
   
  
const NCard1 = (val) => {
    return (
        <>
       <Card 
        imgsrc = {val.imgsrc}
        heading = {val.heading}
        paragraph = {val.paragraph}
        button = {val.button}
        />
        </>
  
    )
  
  }

const Home = () => {
    return (
        <>
            <Title/>
            <Content2/>
            <div className="map-div">
              {CardData.map(NCard)}
            </div>      
            <Title2/>
            <Content3/>
            <Heading/>
            <div className="map-div2">
                {CardData2.map(NCard1)}
            </div>
            <Icons/>
        </>
    )

}

export default Home;