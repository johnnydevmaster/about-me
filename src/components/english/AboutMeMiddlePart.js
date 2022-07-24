import React from 'react'
import classes from "./AboutMe.module.css"

const AboutMeMiddlePart = () => {
  return (
    <div>
        <div className={classes.middlePart}>
            <div className={classes.aboutMe}>
                <h1>Hi,</h1>
                <p>My name is Johnny, I am 15 years old, I live in Romania and my full romanian name is Candrea Ionut Cosmin.</p>
                <p>I started coding when I was 12 years old and now I can say that I am very good at it. So far I have created 3 public websites that you can access here: "<a className={classes.siteLink} href='https://johnny-s-portfolio.netlify.app/'>https://johnny-s-portfolio.netlify.app/</a>", "<a className={classes.siteLink} href="https://excursii-el-majico.herokuapp.com/">https://excursii-el-majico.herokuapp.com/</a>" and "<a className={classes.siteLink} href="https://comunity-page.herokuapp.com/" >https://comunity-page.herokuapp.com/</a>".
                <br/><br/>
                I started editing videos at the age of 14 and so far I have made a lot of videos for different people.</p>
                <br/>
                <h2>This is a photo of me: </h2>
                <div className={classes.profilePicture} />
            </div>
      </div>

    </div>
  )
}

export default AboutMeMiddlePart