export interface Skill {
  title: string;
  competency: number;
  category: string[];
}

export interface Category {
  name: string;
  color: string;
  /** Pre-computed text color for contrast - 'dark' for light backgrounds, 'light' for dark */
  textColor: 'dark' | 'light';
}

const skills: Skill[] = [
  // AI Engineering (Priority order: RAG, Agentic AI, Pydantic AI)
  {
    title: 'RAG (Retrieval Augmented Generation)',
    competency: 5,
    category: ['AI Engineering'],
  },
  {
    title: 'Agentic AI / AI Agents',
    competency: 5,
    category: ['AI Engineering'],
  },
  {
    title: 'PydanticAI',
    competency: 5,
    category: ['AI Engineering'],
  },
  {
    title: 'Large Language Models (LLMs)',
    competency: 5,
    category: ['AI Engineering'],
  },
  {
    title: 'Structured Outputs',
    competency: 5,
    category: ['AI Engineering'],
  },
  {
    title: 'MLOps/LLMOps',
    competency: 4,
    category: ['AI Engineering', 'Infrastructure'],
  },
  {
    title: 'PyTorch',
    competency: 5,
    category: ['AI Engineering'],
  },
  {
    title: 'Hugging Face Transformers / smolagents',
    competency: 5,
    category: ['AI Engineering'],
  },
  {
    title: 'CrewAI',
    competency: 5,
    category: ['AI Engineering'],
  },
  {
    title: 'OpenAI / Anthropic (Claude)',
    competency: 5,
    category: ['AI Engineering'],
  },
  {
    title: 'Computer Vision',
    competency: 4,
    category: ['AI Engineering'],
  },
  {
    title: 'Langchain',
    competency: 4,
    category: ['AI Engineering'],
  },
  {
    title: 'Weights & Biases',
    competency: 4,
    category: ['AI Engineering'],
  },
  {
    title: 'Scikit-Learn',
    competency: 4,
    category: ['AI Engineering'],
  },
  // Programming Languages
  {
    title: 'Python',
    competency: 5,
    category: ['Languages', 'AI Engineering'],
  },
  {
    title: 'Go',
    competency: 4,
    category: ['Languages'],
  },
  {
    title: 'Javascript/Typescript',
    competency: 4,
    category: ['Languages', 'Web Development'],
  },
  {
    title: 'Java',
    competency: 3,
    category: ['Languages'],
  },
  // Web & API
  {
    title: 'FastAPI',
    competency: 5,
    category: ['Web Development'],
  },
  // Databases (Priority: Vector Databases, PostgreSQL)
  {
    title: 'Vector Databases (Qdrant, MongoDB Atlas)',
    competency: 4,
    category: ['AI Engineering', 'Databases'],
  },
  {
    title: 'PostgreSQL',
    competency: 4,
    category: ['Databases'],
  },
  // Cloud & Infrastructure
  {
    title: 'GCP',
    competency: 4,
    category: ['Infrastructure'],
  },
  {
    title: 'Azure',
    competency: 4,
    category: ['Infrastructure'],
  },
  {
    title: 'AWS',
    competency: 3,
    category: ['Infrastructure'],
  },
].map((skill) => ({ ...skill, category: skill.category.sort() }));

/**
 * Category colors with pre-computed text contrast.
 */
const CATEGORY_COLORS: { color: string; textColor: 'dark' | 'light' }[] = [
  { color: 'var(--color-skill-1)', textColor: 'light' },
  { color: 'var(--color-skill-2)', textColor: 'dark' },
  { color: 'var(--color-skill-3)', textColor: 'light' },
  { color: 'var(--color-skill-4)', textColor: 'light' },
  { color: 'var(--color-skill-5)', textColor: 'dark' },
  { color: 'var(--color-skill-6)', textColor: 'dark' },
];

const FALLBACK_COLORS: { color: string; textColor: 'dark' | 'light' }[] = [
  { color: '#3896e2', textColor: 'dark' },
  { color: '#c3423f', textColor: 'light' },
  { color: '#d75858', textColor: 'light' },
  { color: '#747fff', textColor: 'light' },
  { color: '#64cb7b', textColor: 'dark' },
];

/**
 * Build categories from skills with requested priority order.
 * Order: AI Engineering, Databases, then the rest.
 */
function buildCategories(skillsList: Skill[]): Category[] {
  const priorityOrder = ['AI Engineering', 'Databases'];

  const otherCategories = Array.from(
    new Set(
      skillsList
        .flatMap(({ category }) => category)
        .filter((cat) => !priorityOrder.includes(cat)),
    ),
  ).sort();

  const uniqueCategories = [...priorityOrder, ...otherCategories];

  const allColors = [...CATEGORY_COLORS, ...FALLBACK_COLORS];

  return uniqueCategories.map((category, index) => {
    const colorConfig = allColors[index] ?? {
      color: '#888888',
      textColor: 'light' as const,
    };
    return {
      name: category,
      color: colorConfig.color,
      textColor: colorConfig.textColor,
    };
  });
}

const categories: Category[] = buildCategories(skills);

export { categories, skills };
