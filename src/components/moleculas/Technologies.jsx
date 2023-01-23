import { data } from "../../data/data";
import ProfileTechnologies from "../atoms/ProfileTechnologies";
import ProfileSubtitle from "../atoms/ProfileSubtitle";
export default function Lenguages() {
  return (
    <>
      <ProfileSubtitle subtitulo={"Technologies"}/>
      {data.technologies.map((el) => (
        <ProfileTechnologies technologies={el} key={el} />
      ))}
    </>
  );
}

