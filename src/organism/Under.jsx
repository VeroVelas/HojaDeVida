import React from 'react'
import moduleStyle from "../assets/style/cv.module.css";
import Profile from "../components/moleculas/Profile";
import Experience from '../components/moleculas/Experience';
import Education from '../components/moleculas/Education';
export default function Under() {
  return (
    <div>
      <div className={moduleStyle.line}></div>
      <div className={moduleStyle.colDiv8}>
        <div className={moduleStyle.contentBox}>
          <Profile/>
          <Experience/>
          <Education/>
        </div>
      </div>
      <div className={moduleStyle.clearfix}></div>

    </div>
  )
}
