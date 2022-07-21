import React from 'react'
import {  Link } from "react-router-dom";
import classes from "./Homepage.module.css"

const HomepageTopPart = () => {
  return (
<div>
    <div className={classes.topPart}>
        <div className={classes.logo}/>
        <Link className={classes.options}  to="/en/about-me">About me</Link> 
        <Link className={classes.options}  to="/en/what-i-do">What I do </Link>
        <Link className={classes.options}  to="/en/my-services">My services</Link>
        <Link className={classes.options}  to="/en/contact-me">Contact me</Link>
    </div>
</div>
  )
}

export default HomepageTopPart