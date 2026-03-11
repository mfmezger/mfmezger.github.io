export interface Degree {
  school: string;
  degree: string;
  link: string;
  year: number;
}

const degrees: Degree[] = [
  {
    school: 'Heidelberg University, Medical Center',
    degree: 'PhD Medical Computer Science (LLMs for Clinical Workflows)',
    link: 'https://www.uni-heidelberg.de',
    year: 2026, // Ongoing
  },
  {
    school: 'Heidelberg University',
    degree: 'M.Sc. Medical Computer Science',
    link: 'https://www.uni-heidelberg.de',
    year: 2020,
  },
  {
    school: 'Heidelberg University',
    degree: 'B.Sc. Medical Computer Science',
    link: 'https://www.uni-heidelberg.de',
    year: 2018,
  },
];

export default degrees;
