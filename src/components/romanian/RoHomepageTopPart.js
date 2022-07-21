import React from 'react'
import {  Link } from "react-router-dom";
import classes from "./Homepage.module.css"

const HomepageTopPart = () => {
  return (
<div>
    <div className={classes.topPart}>
        <div className={classes.logo}/>
        <Link className={classes.options}  to="/ro/despre-mine">Despre mine</Link> 
        <Link className={classes.options}  to="/ro/cu-ce-ma-ocup">Cu ce ma ocup </Link>
        <Link className={classes.options}  to="/ro/servicile-mele">Servicile mele</Link>
        <Link className={classes.options}  to="/ro/contacteaza-ma">Contacteaza-ma</Link>
    </div>
</div>
  )
}

export default HomepageTopPart