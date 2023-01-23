import React from 'react'
import moduleStyle from "../assets/style/cv.module.css";
import Contact from '../components/moleculas/Contact';
import SkillsProfile from '../components/moleculas/SkillsProfile';
import Technoligies from '../components/moleculas/Technologies';
import HeadProfile from '../components/moleculas/HeadProfile';
export default function Top() {
  return (
    <div>
        <HeadProfile/>
        <div className={moduleStyle.clearfix}></div>
      
        <div className={moduleStyle.colDiv4}>
            <div className={moduleStyle.contentBox}>
                <Contact/>
                <SkillsProfile/>
                <Technoligies/>
            </div>
        </div>
    </div>
  )
}
