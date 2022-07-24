import React from 'react'
import {  Link } from "react-router-dom";
import classes from "./WhatIDo.module.css"

const WhatIDoTopPart = () => {
  return (
    <div>
        <div className={classes.topPart}>
            <div className={classes.backSymbol}>
            <Link className={classes.backSymbol}  to="/ro/"> <div className={classes.backImage} /> </Link> 
            </div>
        </div>
    </div>
  )
}

export default WhatIDoTopPart