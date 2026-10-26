export type Education = {
  degree: string;
  institution: string;
  period: string;
  url?: string;
};

export const EDUCATION: readonly Education[] = [
  {
    degree:      "Bachelor's Degree in Computing",
    institution: "University of Greenwich",
    period:      "2026",
  },
  {
    degree:      "Level 4 & 5 Diploma of Computing with Business Management",
    institution: "Strategy First University",
    period:      "2020 - 2023",
  },
  {
    degree:      "GitHub Foundations",
    institution: "DataCamp",
    period:      "10 hrs",
    url:         "https://www.datacamp.com/completed/statement-of-accomplishment/track/746b94fa7536126934f43f458ced072b6fbce653",
  },
  {
    degree:      "Docker - Level 1",
    institution: "KodeKloud",
    period:      "2025",
    url:         "https://engineer.kodekloud.com/certificate-verification/b029fdb3-0405-4179-857f-93aff6964f76",
  },
  {
    degree:      "Git - Level 1",
    institution: "KodeKloud",
    period:      "2024 - 2025",
    url:         "https://engineer.kodekloud.com/certificate-verification/fb400822-4feb-4c8b-95ee-c125b624275d",
  },
];
