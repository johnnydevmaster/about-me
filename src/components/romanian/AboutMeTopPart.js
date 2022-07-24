import React from 'react'
import {  Link } from "react-router-dom";
import classes from "./AboutMe.module.css"

const AboutMeTopPart = () => {
  return (
    <div>
        <div className={classes.topPart}>
            <div className={classes.backSymbol}>
            <Link className={classes.backSymbol}  to="/en/"> <div className={classes.backImage} /> </Link> 
            </div>
        </div>

    </div>
  )
}

export default AboutMeTopPart