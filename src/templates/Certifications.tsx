import { CERTIFICATIONS } from "@/data/certifications";
import { SectionLabel } from "@/components/SectionLabel";
import { CertificationCard } from "@/components/CertificationCard";

export default function Certifications() {
  return (
    <section
      id="certifications"
      className="font-sans px-6 md:px-10 py-14 md:py-18 border-t border-neutral-100 dark:border-neutral-800"
    >
      <div className="max-w-6xl mx-auto">
        <SectionLabel label="05 — Certifications" className="mb-6" />

        <div className="space-y-0 divide-y divide-neutral-100 dark:divide-neutral-800">
          {CERTIFICATIONS.map((item, index) => (
            <CertificationCard
              key={item.title}
              certification={item}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
