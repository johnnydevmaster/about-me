import React from 'react'
import classes from "./AboutMe.module.css"

const AboutMeMiddlePart = () => {
  return (
    <div>
        <div className={classes.middlePart}>
            <div className={classes.aboutMe}>
                <h1>Salut,</h1>
                <p>Numele meu este Ionut, am 15 ani, locuiesc in Romania si numele meu complet este Candrea Ionut Cosmin.</p>
                <p>Am inceput sa codez de la varsta de 12 ani si acum pot sa spun ca sunt foarte bun la asta. Până acum am creat 3 site-uri publice pe care le puteți accesa aici: "<a className={classes.siteLink} href='https://johnny-s-portfolio.netlify.app/'>https://johnny-s-portfolio.netlify.app/</a>", "<a className={classes.siteLink} href="https://excursii-el-majico.herokuapp.com/">https://excursii-el-majico.herokuapp.com/</a>" and "<a className={classes.siteLink} href="https://comunity-page.herokuapp.com/" >https://comunity-page.herokuapp.com/</a>".
                <br/><br/>
                Am început să editez videoclipuri la vârsta de 14 ani și până acum am realizat o mulțime de videoclipuri pentru diferite persoane.</p>
                <br/>
                <h2>Aceasta este o fotografie cu mine: </h2>
                <div className={classes.profilePicture} />
            </div>
      </div>

    </div>
  )
}

export default AboutMeMiddlePart