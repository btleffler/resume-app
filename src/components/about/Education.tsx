import { EducationData } from "./types";

function Education({ education }: { education: EducationData }) {
  return (
    <div className="flex flex-col relative overflow-hidden m-0">
      <span className="absolute top-0 right-0 z-0 text-slate-800 text-6xl opacity-25 skew-x-6 -rotate-12">Education</span>
      <h2>
        <span className="text-2xl font-serif underline">{education.name}</span>
        <span> - {education.location}</span>
      </h2>
      <h3 className="font-mono">{education.degree}</h3>
    </div>
  );
}

export default Education;
