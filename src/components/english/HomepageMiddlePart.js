import React from 'react'
import classes from "./Homepage.module.css"
import {  Link } from "react-router-dom";

const HomepageMiddlePart = () => {
  return (
    <div>
        <div className={classes.middlePart}>
            <div className={classes.presentationText}> 
            <h2>Quality videos at a reasonable price</h2>
            <h2>Quality professional sites at a great price</h2>
            <h2>All of this made by me</h2>
            </div>
            <div className={classes.buttonArea}>
                <Link className={classes.link1}  to="/en/contact-me"><button className={classes.button1}  >Make a order</button></Link>
                <Link className={classes.link2}  to="/en/my-services"> <button className={classes.button2} > Find out more </button> </Link>
            </div>
        </div>
    </div>
  )
}

export default HomepageMiddlePart