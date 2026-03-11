/**
 * Conforms to https://jsonresume.org/schema/
 */
export interface Position {
  name: string;
  position: string;
  url: string;
  startDate: string;
  endDate?: string;
  summary?: string;
  highlights?: string[];
}

const work: Position[] = [
  {
    name: 'Schwarz Digits',
    position: 'Domain Engineering Lead for Generative AI & NLP',
    url: 'https://it.schwarz',
    startDate: '2026-01-01',
    summary: 'Tech Lead for 20 AI Engineers focused on Generative AI and NLP.',
    highlights: [
      'Tech Lead for 20 AI Engineers',
    ],
  },
  {
    name: 'Schwarz Digits',
    position: 'Senior Engineering Lead for Information Retrieval/RAG',
    url: 'https://it.schwarz',
    startDate: '2025-03-01',
    endDate: '2026-01-01',
    summary: 'Leading an AI Engineering Team of 7 Engineers focused on RAG and Agentic Workflows.',
    highlights: [
      'RAG (Retrieval Augmented Generation) and Agentic Workflows',
      'Leading an AI Engineering Team of 7 Engineers',
    ],
  },
  {
    name: 'Schwarz Digits',
    position: 'Engineering Lead for Information Retrieval/RAG',
    url: 'https://it.schwarz',
    startDate: '2024-04-01',
    endDate: '2025-03-01',
    summary: 'Lead for RAG platform development and AI architecture.',
    highlights: [
      'Engineering Lead for Retrieval Augmented Generation Platform development',
      'Development of Agentic Workflow Platform',
      'AI Architect specialized on building applications with Google Gemini',
    ],
  },
  {
    name: 'adesso SE',
    position: 'AI Specialist Consultant - GenAI Developer',
    url: 'https://adesso.de',
    startDate: '2023-01-01',
    endDate: '2024-03-01',
    summary: 'Consulting and integration of Large Language Models for customers.',
    highlights: [
      'Consulting and integration of Large Language Models for customers',
      'Development Lead for Aleph Alpha Luminous Software Integration Projects',
      'Internal Trainer for Large Language Models Integration',
    ],
  },
  {
    name: 'adesso SE',
    position: 'Associate Consultant - AI Specialist',
    url: 'https://adesso.de',
    startDate: '2022-04-01',
    endDate: '2023-01-01',
    summary: 'RAG and Python development focus.',
    highlights: [
      'RAG (Retrieval Augmented Generation) and Python development',
      'Trainer for Prompting for Large Language Models',
    ],
  },
  {
    name: 'University Medical Center Ulm',
    position: 'Medical Computer Science Researcher',
    url: 'https://www.uniklinik-ulm.de',
    startDate: '2020-01-01',
    endDate: '2022-01-01',
    highlights: [
      'Working on 3D/4D Image Processing, Classification & Segmentation',
      'Research on Deep Learning Network Visualization & Explainable AI',
    ],
  },
  {
    name: 'Sony',
    position: 'Master Thesis Researcher',
    url: 'https://sony.com',
    startDate: '2019-01-01',
    endDate: '2020-01-01',
    highlights: [
      'Medical Tissue Segmentation with Hyperspectral Imaging & Deep Learning',
    ],
  },
  {
    name: 'Heilbronn University',
    position: 'Research Assistant',
    url: 'https://www.hs-heilbronn.de',
    startDate: '2018-01-01',
    endDate: '2019-01-01',
    highlights: [
      'Computer Vision & Deep Learning',
      'Working on Radar and Deep Learning for Traffic Recognition',
    ],
  },
  {
    name: 'German Cancer Research Center (DKFZ)',
    position: 'Research Assistant',
    url: 'https://www.dkfz.de',
    startDate: '2018-01-01',
    endDate: '2018-12-31',
    highlights: [
      'Computer Vision & Deep Learning for Cancer Segmentation',
    ],
  },
];

export default work;
