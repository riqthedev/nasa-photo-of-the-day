import axios from 'axios'
import PictureData from './PictureData';
import React, {useState, useEffect} from 'react'


const Picture = () => {
    const [picture, setPicture] = useState([])

    useEffect(() =>{
        axios.get("https://api.nasa.gov/planetary/apod?api_key=3H4NySyYo9Qg8tniRK6IeadHF0GzbS9OT0n1pa1A")
        .then(res =>{
         setPicture(res.data)
        })
        .catch(err => {
          console.log(err)
        });

    }, []);
    


    return (

        <div className="picture-container"> 
        <h2>{picture.title}</h2>
            <p>{picture.date}</p>
            <img src={picture.hdurl}></img>
            <p>{picture.explanation}</p>
            <div className="author">
                <h3>{picture.copyright}</h3>
            </div>
        </div>

    )
}

export default Picture 
