import React from 'react'
import Button from '@mui/material/Button';
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
                <Button className={classes.button1} variant="outlined" sx={{color:"orange", border:"2px solid orange"}} ><Link className={classes.link1}  to="/en/contact-me">Make a order</Link></Button>
                <Button className={classes.button2} variant="outlined" sx={{color:"blue", border:"2px solid blue"}} ><Link className={classes.link2}  to="/en/my-services">Find out more</Link></Button>
            </div>
        </div>
    </div>
  )
}

export default HomepageMiddlePart