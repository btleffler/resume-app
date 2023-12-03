import { ContactData } from "./types";

function Contact ({ contact }: { contact: ContactData }) {
  return (
    <div className="relative overflow-hidden">
      <span className="absolute top-0 right-0 z-0 text-slate-800 text-6xl opacity-25 skew-x-6 -rotate-12">Contact</span>
      <div className="flex max-md:flex-col relative z-10">
        <h1 className="flex-auto font-serif text-5xl underline">
          {contact.name}
        </h1>
        <div className="flex flex-col text-right mb-3">
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
    </div>
  );
}

export default Contact;
