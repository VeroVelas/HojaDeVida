import moduleStyle from "../../assets/style/cv.module.css";

export default function ProfileExperience({experience}) {
  return (
    <>
    <p className={moduleStyle.p3}>{experience}</p>
    </>
  )
}
