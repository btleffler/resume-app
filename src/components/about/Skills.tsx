import ResumeSection from "@src/components/about/ResumeSection";
import Skill from "@components/about/Skill";

export default function Experience({
  skills,
}: {
  skills: Array<string>,
}) {
  const skillList = skills.map((skill, idx) => (
    <Skill
      key={idx}
      skill={skill} />
  ));

  return (
    <ResumeSection
      title={`Skills`}>
      <ul>
        {skillList}
      </ul>
    </ResumeSection>
  );
}