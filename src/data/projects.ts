export interface Project {
  title: string;
  subtitle?: string;
  link?: string;
  image: string;
  date: string;
  desc: string;
  tech?: string[];
  featured?: boolean;
}

const data: Project[] = [
  {
    title: 'Conversational Agent Backend',
    subtitle: 'LangChain & LangGraph Orchestration',
    link: 'https://github.com/mfmezger/conversational-agent-langchain',
    image: '', 
    date: '2024-05-01',
    desc: 'High-performance FastAPI backend for conversational agents. Implements complex RAG workflows and agentic logic using LangGraph and Qdrant.',
    tech: ['Python', 'FastAPI', 'LangChain', 'LangGraph', 'Qdrant', 'RAG'],
    featured: true,
  },
  {
    title: 'AI Agent Dotfiles',
    subtitle: 'Modern AI Orchestration Setup',
    link: 'https://github.com/mfmezger/ai_agent_dotfiles',
    image: '',
    date: '2025-01-01',
    desc: 'A collection of configuration files and scripts optimized for building and running AI agents. Features automated setup for agentic environments.',
    tech: ['Bash', 'Python', 'AI Agents', 'DevOps'],
    featured: true,
  },
  {
    title: 'LLM Engineering Template',
    subtitle: 'Quickstart for AI Engineering',
    link: 'https://github.com/mfmezger/llm-engineering-template',
    image: '',
    date: '2024-08-01',
    desc: 'A robust template for modern AI engineering. Features uv for package management, Copier for scaffolding, and best practices for GenAI applications.',
    tech: ['Python', 'uv', 'Copier', 'LLMOps', 'DevOps'],
    featured: true,
  },
  {
    title: 'AI Engineering Dotfiles',
    subtitle: 'Personal Workflow Optimization',
    link: 'https://github.com/mfmezger/dotfiles',
    image: '',
    date: '2024-01-01',
    desc: 'Tailored development environment for AI Engineers. Optimized configuration for Neovim, Tmux, and shell workflows on Linux and macOS.',
    tech: ['Bash', 'Lua', 'GNU Stow', 'Neovim'],
    featured: true,
  },
];

export default data;
