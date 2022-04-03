import React from "react";
import data from "../data";


export default function Images(){
   
const[images, setImages] = React.useState(data[0].imageUrl)
console.log(images)

function clickEvent(){
    const memesArray = data
    const randomNumber = Math.floor(Math.random() * memesArray.length)
    const url = memesArray[randomNumber].imageUrl
    setImages(prevMeme => ({
        ...prevMeme,
        imageUrl: url
    }))
    }


return(
    <div className="form">
        <button className="form--button" onClick={clickEvent}>Get Meme</button>
        <img className="meme--pic" src={images.imageUrl} alt="" />
    </div>
)
}