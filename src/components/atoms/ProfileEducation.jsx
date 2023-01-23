import moduleStyle from "../../assets/style/cv.module.css";

export default function Education({ school }) {
  return (
    <>
    <p className={moduleStyle.p3}>{school}</p>
    </>
  );
}
