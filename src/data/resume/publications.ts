export interface Publication {
  title: string;
  authors: string[];
  journal: string;
  date: string;
  doi?: string;
}

const publications: Publication[] = [
  {
    title: 'Deep Neural Networks and Machine Learning Radiomics Modelling for Prediction of Relapse in Mantle Cell Lymphoma',
    authors: ['Lisson CS', 'Lisson CG', 'Mezger MF', 'et al.'],
    journal: 'Cancers (Basel)',
    date: '2022-04',
    doi: '10.3390/cancers14082008',
  },
  {
    title: 'Longitudinal CT Imaging to Explore the Predictive Power of 3D Radiomic Tumour Heterogeneity in Precise Imaging of Mantle Cell Lymphoma',
    authors: ['Lisson CS', 'Lisson CG', 'Achilles S', 'Mezger MF', 'et al.'],
    journal: 'Cancers (Basel)',
    date: '2022-01',
    doi: '10.3390/cancers14020393',
  },
];

export default publications;
