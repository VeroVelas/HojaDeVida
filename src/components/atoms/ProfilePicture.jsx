import img from "../../assets/img/vero.jpeg";
import moduleStyle from "../../assets/style/cv.module.css";
export default function ProfilePicture() {
  return (
   <>
    <img src={img} className={moduleStyle.profile}/>
   </>
  );
}