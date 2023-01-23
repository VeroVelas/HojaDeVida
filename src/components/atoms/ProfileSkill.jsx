import moduleStyle from "../../assets/Style/cv.module.css";
export default function ProfileSkill({ skill }) {
  return (
    <>
      <ul className={moduleStyle.skills}>
        <li key={skill}>
          <span>{skill}</span>
        </li>
      </ul>
    </>
  );
}
