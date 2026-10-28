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
];
