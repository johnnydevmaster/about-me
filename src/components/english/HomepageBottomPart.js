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
        skill4: "- Apps & Sites made with react",
        skill5: "- Frontend & Backend developer",
      })
    }
  
    const addTextHandler2 = ()=>{
      setVideoEditingDescription({
        skill1: "- Videos made with Adobe Premiere Pro",
        skill2: "- Custom effects & transitions",
        skill3: "- Videos made in a short time",
      })
    }
  
    const addTextHandler3 = ()=>{
      setAdvertisingDescription({
        skill1: "- Posting content on different platforms",
        skill2: "- Content ideas",
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
            <div className={classes.text}>Programing skill</div>
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
            <div className={classes.textSp}>Video editing skill</div>
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
            <div className={classes.text} >Advertising skill</div>
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