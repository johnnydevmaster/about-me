import React from 'react'
import classes from "./ContactMe.module.css"

const ContactMeMiddlePart = () => {
  return (
    <div>
        <h1 className={classes.title}>How to contact me</h1>
        <div className={classes.middlePart}>
            <div className={classes.phoneWay}>
            <h2>With my phone number</h2>
            <div className={classes.phoneAnimation}>
                <p className={classes.phoneText}>(+40) 0753 807 109 </p>
                <div className={classes.phoneLogo}/>
            </div>
            </div>
            <div className={classes.gmailWay}>
            <h2>With gmail</h2>
            <div className={classes.gmailAnimation}>
                <p className={classes.gmailText}>ionut.csndrea@gmail.com </p>
                <div className={classes.gmailLogo}/>
            </div>
            </div>
            <div className={classes.socialMediaWay}>
            <h2>With social media apps</h2>
            <div className={classes.instagramAnimation}>
                <p className={classes.instagramText}>Instagram:ㅤ jhonu_ionut </p>
                <div className={classes.instagramLogo}/>
            </div>
            <div className={classes.tikTokAnimation}>
                <p className={classes.tikTokText}>TikTok:ㅤ doar_ionut.cn</p>
                <div className={classes.tikTokLogo}/>
            </div>
            </div>
        </div>
    </div>
  )
}

export default ContactMeMiddlePart