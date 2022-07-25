import React from 'react'
import classes from "./MyServices.module.css"
import {  Link } from "react-router-dom";

const MyServicesMiddlePart = () => {
  return (
    <div>
        <h1 className={classes.myServices}>Servicile mele</h1>
        <div className={classes.middlePart}>
            <div className={classes.programingPart} >
            <h1 className={classes.title}>Serviciul de programare</h1>
            <p className={classes.paragraph}>Realizarea de site-uri și aplicații în diferite limbaje de programare.</p>
            <p className={classes.paragraph}>Aceste site-uri și aplicații vor avea un aspect modern și vor fi compatibile cu telefonul.</p>
            <Link className={classes.backSymbol}  to="/ro/contacteaza-ma"> <button className={classes.button}>Afla mai multe</button> </Link> 
            </div>
            <div className={classes.videoEditingPart} >
            <h1 className={classes.title}>Serviciul de editare de videoclipuri</h1>
            <p className={classes.paragraph}>Videoclipuri de înaltă calitate realizate în Adobe Premiere Pro.</p>
            <p className={classes.paragraph}>Dacă clientul dorește, pot adăuga o melodie de fundal făcută <br/> special pentru acel videoclip.</p>
            <Link className={classes.backSymbol}  to="/ro/contacteaza-ma"> <button className={classes.button2}>Afla mai multe</button> </Link> 
            </div>
            <div className={classes.advertisingPart} >
            <h1 className={classes.title}>Serviciul de publicitate</h1>
            <p className={classes.paragraph}>ㅤㅤㅤㅤÎți fac reclamă pentru conținutul dorit.</p>
            <p className={classes.paragraph}>ㅤㅤㅤㅤÎn plus, vă pot oferi câteva idei de conținut pentru<br/>ㅤㅤㅤㅤpublicitate.</p>
            <Link className={classes.backSymbol}  to="/ro/contacteaza-ma"> <button className={classes.button3}>Afla mai multe</button> </Link> 
            </div>
        </div>
    </div>
  )
}

export default MyServicesMiddlePart