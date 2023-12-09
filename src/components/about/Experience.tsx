import { JobData } from "@components/about/types";
import ResumeSection from "@src/components/about/ResumeSection";
import Job from "@components/about/Job";

export default function Experience({
  jobs,
}: {
  jobs: Array<JobData>,
}) {
  const renderedJobs = jobs.map((job, idx) => (
    <Job
      key={idx}
      job={job}
    />
  ));

  return (
    <ResumeSection
      title={`Experience`}
    >
      {renderedJobs}
    </ResumeSection>
  );
}
