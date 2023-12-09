import { ContactData } from "@components/about/types";
import ResumeSection from "@components/about/ResumeSection";

export default function Contact ({
  contact,
}: {
  contact: ContactData,
}) {
  return (
    <ResumeSection
      title={`Contact`}>
      <div className="flex max-md:flex-col">
        <h1
          className="flex-auto font-serif text-5xl underline">
          {contact.name}
        </h1>
        <div
          className="flex flex-col text-right mb-3">
          <a
            className="font-mono transition-all hover:text-cyan-300"
            href={`mailto:${contact.email}`}>
            {contact.email}
          </a>
          <a
            className="font-mono transition-all hover:text-cyan-300"
            href={`tel:${contact.phone}`}>
            {contact.phone}
          </a>
        </div>
      </div>
    </ResumeSection>
  );
}
