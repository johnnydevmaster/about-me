import React from 'react'
import classes from "./AboutMe.module.css"

const AboutMeSkillPart = () => {
  return (
    <div>
        <div className={classes.skillArea}>
          <h2 className={classes.skillTitle}>Programing skill table</h2>
          <table>
            <tr>
              <th></th>
              <th>Beginner</th>
              <th>Intermediate</th>
              <th>Master</th>
            </tr>
            <tr>
              <td><div className={classes.html}/></td>
              <td></td>
              <td></td>
              <td><div className={classes.redMark}/></td>
            </tr>
            <tr>
              <td><div className={classes.css}/></td>
              <td></td>
              <td></td>
              <td><div className={classes.redMark}/></td>
            </tr>
            <tr>
              <td><div className={classes.javascript}/></td>
              <td></td>
              <td><div className={classes.redMark}/></td>
              <td></td>
            </tr>
            <tr>
              <td><div className={classes.react}/></td>
              <td></td>
              <td></td>
              <td><div className={classes.redMark}/></td>
            </tr>
          </table>
                  
          <h2 className={classes.skillTitle}>Video editing skill table</h2>
          <table>
            <tr>
              <th></th>
              <th>Beginner</th>
              <th>Intermediate</th>
              <th>Master</th>
            </tr>
            <tr>
              <td><div className={classes.adobePremierePro}/></td>
              <td></td>
              <td></td>
              <td><div className={classes.redMark}/></td>
            </tr>
            <tr>
              <td>Transitions & Effects</td>
              <td></td>
              <td></td>
              <td><div className={classes.redMark}/></td>
            </tr>
            <tr>
              <td>Background music</td>
              <td></td>
              <td></td>
              <td><div className={classes.redMark}/></td>
            </tr>
          </table>
        <br/><br/>
        </div>

    </div>
  )
}

export default AboutMeSkillPart