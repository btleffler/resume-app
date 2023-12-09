import { EducationData } from "@components/about/types";
import ResumeSection from "@components/about/ResumeSection";

export default function Education({
  education,
}: {
  education: EducationData,
}) {
  return (
    <ResumeSection
      title={`Education`}>
      <h2>
        <span
          className="text-2xl font-serif underline">
          {education.name}
        </span>
        <span>
          {' '}- {education.location}
        </span>
      </h2>
      <h3
        className="font-mono">
        {education.degree}
      </h3>
    </ResumeSection>
  );
}
