import ProfileSubtitle from "../atoms/ProfileSubtitle";
import ProfileEducation from "../atoms/ProfileEducation";
import { data } from "../../data/data";
export default function Education() {
  return (
    <>
      <ProfileSubtitle subtitulo={"Academic Training"} />
      {data.schools.map((school) => (
        <ProfileEducation key={school} school={school}/>
      ))}
    </>
  );
}
