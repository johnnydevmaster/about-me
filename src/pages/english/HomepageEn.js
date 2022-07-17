import React from 'react'
import {  Link } from "react-router-dom";
import classes from "./Homepage.module.css"
import Button from '@mui/material/Button';

const HomepageEn = () => {
  return (
    <div>
      <div className={classes.topPart}>
        <div className={classes.logo}/>
        <Link className={classes.options}  to="/en/about-me">About me</Link> 
        <Link className={classes.options}  to="/en/what-i-do">What I do </Link>
        <Link className={classes.options}  to="/en/my-services">My services</Link>
        <Link className={classes.options}  to="/en/contact-me">Contact me</Link>
      </div>
      <div className={classes.middlePart}>
        <div className={classes.presentationText}> 
          <h2>Quality videos at a reasonable price</h2>
          <h2>Quality professional sites at a great price</h2>
        </div>
        <div className={classes.buttonArea}>
            <Button variant="outlined" sx={{color:"orange", border:"2px solid orange"}} >Make a order</Button>
            <Button variant="outlined" sx={{color:"blue", border:"2px solid blue"}} >Find out more</Button>
          </div>
      </div>
      <div className={classes.bottomPart}></div>
    </div>
  )
}

export default HomepageEn