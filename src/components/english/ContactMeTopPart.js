import React from 'react'
import {  Link } from "react-router-dom";
import classes from "./ContactMe.module.css"

const ContactMeTopPart = () => {
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

export default ContactMeTopPart