import React from 'react'
import classes from "./WhatIDo.module.css"

const WhatIDoMiddlePart = () => {
  return (
    <div>
        <div className={classes.middlePart}>
          <div className={classes.workTime}>
            <h1 className={classes.texT}>When I work ?</h1>
            <p className={classes.text}>I usually edit videos and code in the evening, only on Sundays I work more in the morning and very little in the evening.</p>
            <p className={classes.text}>If I don't have any orders, I develop my skills and learn new things.</p>
          </div>
          <br/>
          <div className={classes.freeTime}>
            <h1 className={classes.texT}>When is my free time ?</h1>
            <p className={classes.text}>Even if it's my free time and I receive an order, I find out the details of the order and get to work, so I don't make you wait.</p>
            <p className={classes.text}>The only situation in which I cannot solve your order when I receive it is only if I am away.</p>
          </div>
          <br/>
          <div classNam e={classes.lastPart}></div>
            <h1 className={classes.texT}>How can I do all of this ?</h1>
            <p className={classes.text}>I try my best every time.</p>
        </div>

    </div>
  )
}

export default WhatIDoMiddlePart