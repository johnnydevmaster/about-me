import React from 'react'
import classes from "./AboutMe.module.css"

const AboutMeSkillPart = () => {
  return (
    <div>
        <div className={classes.skillArea}>
          <h2 className={classes.skillTitle}>Tabel de aptitudini de programare</h2>
          <table>
            <tr>
              <th></th>
              <th>Incepator</th>
              <th>Intermediar</th>
              <th>Maestru</th>
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
                  
          <h2 className={classes.skillTitle}>Tabel de abilități de editare video</h2>
          <table>
            <tr>
              <th></th>
              <th>Incepator</th>
              <th>Intermediar</th>
              <th>Maestru</th>
            </tr>
            <tr>
              <td><div className={classes.adobePremierePro}/></td>
              <td></td>
              <td></td>
              <td><div className={classes.redMark}/></td>
            </tr>
            <tr>
              <td>Tranzitii & Efecte</td>
              <td></td>
              <td></td>
              <td><div className={classes.redMark}/></td>
            </tr>
            <tr>
              <td>Muzica de fundal</td>
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