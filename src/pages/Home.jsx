import moduleStyle from "../assets/style/cv.module.css";
import Top from '../organism/Top';
import Under from '../organism/Under';
export default function Home() {
  return (
   <div className={moduleStyle.main}>
    <Top/>
    <Under/>
   </div>
   
  )
}
