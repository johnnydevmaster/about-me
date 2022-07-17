import React from 'react'
import classes from "./FirstPage.module.css"
import {  Link } from "react-router-dom";

const FirstPage = () => {
  return (
    <div className={classes.firstPage}>
        <h1 className={classes.title}>Select your language</h1>
        <div className={classes.languageContainer}>
          <Link className={classes.language}  to="/en">English <div className={classes.flagEn}></div></Link> 
          <Link className={classes.language}  to="/ro">Romanian <div className={classes.flagRo}></div></Link>
        </div>
    </div>
  )
}

export default FirstPage