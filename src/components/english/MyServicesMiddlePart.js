import React from 'react'
import classes from "./MyServices.module.css"
import {  Link } from "react-router-dom";

const MyServicesMiddlePart = () => {
  return (
    <div>
        <h1 className={classes.myServices}>My services</h1>
        <div className={classes.middlePart}>
            <div className={classes.programingPart} >
            <h1 className={classes.title}>Programing service</h1>
            <p className={classes.paragraph}>Making sites and apps in different programing languages.</p>
            <p className={classes.paragraph}>These sites and applications will have a modern appearance and will be phone friendly.</p>
            <Link className={classes.backSymbol}  to="/en/contact-me"> <button className={classes.button}>Learn more</button> </Link> 
            </div>
            <div className={classes.videoEditingPart} >
            <h1 className={classes.title}>Video editing service</h1>
            <p className={classes.paragraph}>High quality videos made in Adobe Premiere Pro.</p>
            <p className={classes.paragraph}>If the client wants, I can add a background song made <br/> especially for that video.</p>
            <Link className={classes.backSymbol}  to="/en/contact-me"> <button className={classes.button2}>Learn more</button> </Link> 
            </div>
            <div className={classes.advertisingPart} >
            <h1 className={classes.title}>Advertising services</h1>
            <p className={classes.paragraph}>ㅤㅤㅤㅤI advertise the content you want.</p>
            <p className={classes.paragraph}>ㅤㅤㅤㅤIn addition, I can give you some content ideas for<br/>ㅤㅤㅤㅤadvertising.</p>
            <Link className={classes.backSymbol}  to="/en/contact-me"> <button className={classes.button3}>Learn more</button> </Link> 
            </div>
        </div>
    </div>
  )
}

export default MyServicesMiddlePart