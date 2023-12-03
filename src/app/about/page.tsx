import ResumeData from './resume-data';
import Resume from '@components/about/Resume';
import './about.css';

export default function AboutHome() {
  return (
    <main className="min-h-screen p-12">
      <Resume resume={ResumeData} />
    </main>
  );
}
