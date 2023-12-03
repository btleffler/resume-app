import { ResumeData } from '@components/about/types';
import Contact from '@components/about/Contact';
import Job from '@components/about/Job';
import Skill from '@components/about/Skill';
import Education from '@components/about/Education';

function Resume({ resume }: { resume: ResumeData }) {
  const jobs = resume.jobs.map((JobData, idx) => <Job key={idx} job={JobData} />);
  const skills = resume.skills.map((SkillData, idx) => <Skill key={idx} skill={SkillData} />);

  return (
    <section className="flex max-lg:flex-col rounded-lg shadow-2xl bg-gradient-to-b from-slate-400 via-70% via-slate-400 to-slate-500 to-90% divide-x divide-slate-600 max-lg:divide-x-0 max-lg:divide-y-2" role="document">
      <div className="flex-auto ml-2 mr-2 divide-y divide-slate-600">
        <Contact contact={resume.contact} />
        <div className="p-2 relative overflow-hidden">
          <span className="absolute top-0 right-0 z-0 text-slate-800 text-6xl opacity-25 skew-x-6 -rotate-12">Experience</span>
          <div className="relative z-10">
            {jobs}
          </div>
        </div>
        <Education education={resume.education} />
      </div>
      <div className="flex-initial p-2 relative overflow-hidden">
        <span className="absolute top-0 right-0 z-0 text-slate-800 text-6xl opacity-25 skew-x-6 -rotate-12">Skills</span>
        <ul className="relative z-10">
          {skills}
        </ul>
      </div>
    </section>
  );
}

export default Resume;
