import moduleStyle from "../../assets/Style/cv.module.css";
import ProfileSubtitle from "../atoms/ProfileSubtitle";
import { data } from "../../data/data";
export default function Profile() {
  return (
    <>
      <ProfileSubtitle subtitulo={"About My"}/>
      <p className={moduleStyle.p3}>{data.description}</p>
    </>
  );
}
