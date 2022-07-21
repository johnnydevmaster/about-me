import React from 'react'
import classes from "./Homepage.module.css"
import { useState } from 'react';

const HomepageBottomPart = () => {
    const [ programingDescription, setProgramingDescription ] = useState("")
    const [ videoEditingDescription, setVideoEditingDescription ] = useState("")
    const [ advertisingDescription, setAdvertisingDescription ] = useState("")
  
    const addTextHandler1 = ()=>{
      setProgramingDescription({
        skill1: "- Javascript master",
        skill2: "- HTML master",
        skill3: "- CSS master",
        skill4: "- Aplicații și site-uri create cu react",
        skill5: "- Frontend & Backend developer",
      })
    }
  
    const addTextHandler2 = ()=>{
      setVideoEditingDescription({
        skill1: "- Videoclipuri realizate cu Adobe Premiere Pro",
        skill2: "- Efecte & tranziții personalizate",
        skill3: "- Videoclipuri realizate in timp scurt",
      })
    }
  
    const addTextHandler3 = ()=>{
      setAdvertisingDescription({
        skill1: "- Postarea de conținut pe diferite platforme",
        skill2: "- Idei de conținut",
      })
    }  
  return (
    <div>
        <div className={classes.bottomPart}>
            <div className={classes.programingSkill}>
            <div className={classes.logoArea}>
                <div className={classes.programingLogo}/>
                <button onClick={addTextHandler1} className={classes.buttonLogo}>▼</button>
            </div>
            <div className={classes.text}>Priceput in programare</div>
            <div className={classes.skillArea}>
                <div>{programingDescription.skill1}</div>
                <div>{programingDescription.skill2}</div>
                <div>{programingDescription.skill3}</div>
                <div>{programingDescription.skill4}</div>
                <div>{programingDescription.skill5}</div>
            </div>
            </div>
            <div className={classes.videoEditingSkill}>
            <div className={classes.logoArea}>
                <div className={classes.videoEditingLogo}/>
                <button onClick={addTextHandler2} className={classes.buttonLogo}>▼</button>
            </div>
            <div className={classes.textSp}>Priceput in editatul videoclipurilor</div>
            <div className={classes.skillArea}>
                <div>{videoEditingDescription.skill1}</div>
                <div>{videoEditingDescription.skill2}</div>
                <div>{videoEditingDescription.skill3}</div>
            </div>
            </div>
            <div className={classes.advertisingSkill}>
            <div className={classes.logoArea}>
                <div className={classes.advertisingSkillLogo} ></div>
                <button onClick={addTextHandler3} className={classes.buttonLogo}>▼</button>
            </div>
            <div className={classes.text} >Priceput in advertising</div>
            <div className={classes.skillArea}>
                <div>{advertisingDescription.skill1}</div>
                <div>{advertisingDescription.skill2}</div>
            </div>
            </div>
      </div>
    </div>
  )
}

export default HomepageBottomPart