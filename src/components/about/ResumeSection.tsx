import { ReactNode } from "react";

export default function ResumeSection({
  children,
  title,
}: {
  children?: ReactNode,
  title: string,
}) {
  return (
    <div
      role="contentinfo"
      className="p-2 relative overflow-hidden">
      <span
        className="absolute top-0 right-0 z-0 text-slate-800 text-6xl opacity-25 skew-x-6 -rotate-12">
        {title}
      </span>
      <div
        className="relative z-10">
        {children}
      </div>
    </div>
  );
}
