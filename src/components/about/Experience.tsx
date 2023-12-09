import { JobData } from "@components/about/types";
import ResumeSection from "@src/components/about/ResumeSection";
import Job from "@components/about/Job";

export default function Experience({
  jobs,
}: {
  jobs: Array<JobData>,
}) {
  return (
    <ResumeSection
      title={`Experience`}
    >
      {jobs.map((job, idx) => (
        <Job
          key={idx}
          job={job}
        />
      ))}
    </ResumeSection>
  );
}
