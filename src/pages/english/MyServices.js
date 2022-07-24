import React from 'react'
import classes from "./MyServices.module.css"
import {  Link } from "react-router-dom";

const MyServices = () => {
  return (
    <div>
    <div className={classes.topPart}>
        <div className={classes.backSymbol}>
            <Link className={classes.backSymbol}  to="/en/"> <div className={classes.backImage} /> </Link> 
        </div>
    </div>
    <div>
        <h1>My services</h1>
        <p>I can ....</p>
    </div>
    </div>
  )
}

export default MyServices