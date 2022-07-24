import React from 'react'
import classes from "./WhatIDo.module.css"

const WhatIDoMiddlePart = () => {
  return (
    <div>
        <div className={classes.middlePart}>
          <div className={classes.workTime}>
            <h1 className={classes.texT}>Cand lucrez ?</h1>
            <p className={classes.text}>De obicei editez videoclipuri si codez seara, doar duminica lucrez mai mult dimineata si foarte putin seara.</p>
            <p className={classes.text}>Dacă nu am nicio comandă, îmi dezvolt abilitățile și învăț lucruri noi.</p>
          </div>
          <br/>
          <div className={classes.freeTime}>
            <h1 className={classes.texT}>Cand este timpul meu liber ?</h1>
            <p className={classes.text}>Chiar dacă e timpul meu liber și primesc o comandă, aflu detaliile comenzii și mă apuc de treabă, ca să nu te fac să astepti.</p>
            <p className={classes.text}>Singura situatie in care nu iti pot rezolva comanda este atunci cand sunt plecat.</p>
          </div>
          <br/>
          <div classNam e={classes.lastPart}></div>
            <h1 className={classes.texT}>Cum pot sa le fac pe toate astea ?</h1>
            <p className={classes.text}>Fac tot de ce sunt in stare de fiecare dată.</p>
        </div>

    </div>
  )
}

export default WhatIDoMiddlePart