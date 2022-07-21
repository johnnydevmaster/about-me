import React from 'react'
import Button from '@mui/material/Button';
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
                <Button className={classes.button1} variant="outlined" sx={{color:"orange", border:"2px solid orange"}} ><Link className={classes.link1}  to="/ro/contacteaza-ma">Fa o comandă</Link></Button>
                <Button className={classes.button2} variant="outlined" sx={{color:"blue", border:"2px solid blue"}} ><Link className={classes.link2}  to="/ro/servicile-mele">Află mai multe</Link></Button>
            </div>
        </div>
    </div>
  )
}

export default HomepageMiddlePart