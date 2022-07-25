import React from 'react'
import classes from "./Homepage.module.css"
import {  Link } from "react-router-dom";

const HomepageMiddlePart = () => {
  return (
    <div>
        <div className={classes.middlePart}>
            <div className={classes.presentationText}> 
            <h2>Videoclipuri de calitate la un preț rezonabil</h2>
            <h2>Site-uri profesionale de calitate la un preț avantajos</h2>
            <h2>Toate acestea făcute de mine</h2>
            </div>
            <div className={classes.buttonArea}>
                <Link className={classes.link1}  to="/ro/contacteaza-ma"><button className={classes.button1}  >Fa o comandă</button></Link>
                <Link className={classes.link2}  to="/ro/serviciile-mele"> <button className={classes.button2} > Află mai multe </button> </Link>
            </div>
        </div>
    </div>
  )
}

export default HomepageMiddlePart