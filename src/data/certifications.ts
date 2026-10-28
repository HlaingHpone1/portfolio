export type Certification = {
  title: string;
  issuer: string;
  period: string;
  url: string;
};

export const CERTIFICATIONS: readonly Certification[] = [
  {
    title:  "GitHub Foundations",
    issuer: "DataCamp",
    period: "10 hrs",
    url:    "https://www.datacamp.com/completed/statement-of-accomplishment/track/746b94fa7536126934f43f458ced072b6fbce653",
  },
  {
    title:  "Docker - Level 1",
    issuer: "KodeKloud",
    period: "2025",
    url:    "https://engineer.kodekloud.com/certificate-verification/b029fdb3-0405-4179-857f-93aff6964f76",
  },
  {
    title:  "Git - Level 1",
    issuer: "KodeKloud",
    period: "2024 - 2025",
    url:    "https://engineer.kodekloud.com/certificate-verification/fb400822-4feb-4c8b-95ee-c125b624275d",
  },
];
