import { ResumeData } from '@components/about/types';
import Contact from '@components/about/Contact';
import Education from '@components/about/Education';
import Experience from '@components/about/Experience';
import Skills from '@components/about/Skills';

export default function Resume({
  resume,
}: {
  resume: ResumeData,
}) {
  return (
    <section
      className="h-screen flex max-lg:flex-col shadow-2xl bg-gradient-to-b from-slate-400 via-70% via-slate-400 to-slate-500 to-90% divide-x divide-slate-600 max-lg:divide-x-0 max-lg:divide-y-2"
      role="document">
      <div
        className="flex-auto ml-2 mr-2 divide-y divide-slate-600">
        <Contact
          contact={resume.contact} />
        <Experience
          jobs={resume.jobs} />
        <Education
          education={resume.education} />
      </div>
      <div
        className="flex-initial">
        <Skills
          skills={resume.skills} />
      </div>
    </section>
  );
}
