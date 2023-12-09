import { JobData } from "./types";

const formatDate = (date: Date) =>
  date.toLocaleDateString('en-us', {
    year: `numeric`,
    month: `long`,
  });

export default function Job({
  job,
}: {
  job: JobData,
}) {
  const formattedDates = job.end
    ? `${formatDate(job.start)} - ${formatDate(job.end)}`
    : `${formatDate(job.start)} - Present`;
  
  const duties = job.duties.map((duty, idx) => (
    <li
      key={idx}
      className="text-sm">
      {duty}
    </li>
  ));

  const contributions = job.contributions.map((contribution, idx) => (
    <li
      key={idx}
      className="text-sm">
      {contribution}
    </li>
  ));

  return (
    <div
      className="border-b-2 border-dashed border-slate-500 mt-4 first:mt-0 last:border-b-0">
      <h2>
        <span
          className="font-serif text-2xl underline">
          {job.name}
        </span>
        <span
          className="font-mono text-md">
          {' '}- {job.location}
        </span>
      </h2>
      <div
        className="ml-2">
        <h3
          className="font-mono text-xl underline">
          {job.title}
        </h3>
        <span
          className="font-mono text-sm uppercase">
          {formattedDates}
        </span>
        <span
          className="text-sm underline block">
          Duties:
        </span>
        <ul
          className="list-outside list-disc ml-5 mb-2">
          {duties}
        </ul>
        <span
          className="text-sm underline block">
          Noteworthy Contributions:
        </span>
        <ul
          className="list-outside list-disc ml-5 mb-2">
          {contributions}
        </ul>
      </div>
    </div>
  );
}
