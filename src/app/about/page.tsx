import ResumeData from './resume-data';
import Resume from '@components/about/Resume';
import './about.css';

export default function AboutHome() {
  return (
    <main
      className="min-h-screen pl-12 pr-12">
      <Resume resume={ResumeData} />
    </main>
  );
}
