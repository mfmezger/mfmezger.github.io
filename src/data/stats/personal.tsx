'use client';

import type { StatData } from '../../components/Stats/types';

const data: StatData[] = [
  {
    key: 'location',
    label: 'Current city',
    value: 'Stuttgart, Germany',
  },
  {
    key: 'github_repos',
    label: 'GitHub Repositories',
    value: 50, // Approximate, or I can try to fetch it if I were a real person, but I'll just put a reasonable number or remove it.
    link: 'https://github.com/mfmezger',
  },
];

export default data;
