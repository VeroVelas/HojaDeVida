import ProfileSkill from "../atoms/ProfileSkill";
import ProfileSubtitle from "../atoms/ProfileSubtitle";
import { data } from "../../data/data";
export default function SkillsProfile() {
  return (
    <>
      <ProfileSubtitle subtitulo={"Skills"} />
      {data.skills.map((skill) => (
        <ProfileSkill skill={skill} key={skill} />
      ))}
    </>
  );
}
