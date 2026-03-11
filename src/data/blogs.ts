export interface BlogsItem {
  title: string;
  url: string;
  date: string;
  description: string;
}

const data: BlogsItem[] = [
  {
    title: 'Mistral and Phi – a revolution based on small (fine-tuned) language models?',
    url: 'https://www.adesso.de/en/news/blog/mistral-and-phi-a-revolution-based-on-small-fine-tuned-language-models.jsp',
    date: '2023-12-01',
    description: 'Discusses the shift from "bigger is better" to efficient, high-performance small language models (SLMs) and the role of fine-tuning.',
  },
  {
    title: 'Rust in Python, or the rustification of Python',
    url: 'https://www.adesso.de/en/news/blog/rust-in-python-or-the-rustification-of-python.jsp',
    date: '2023-12-01',
    description: 'Explores combining Python\'s productivity with Rust\'s performance and safety, including tools for interoperability.',
  },
  {
    title: 'Open source large language models',
    url: 'https://www.adesso.de/en/news/blog/open-source-large-language-models.jsp',
    date: '2023-08-01',
    description: 'An in-depth look at purely open-source models like BLOOM as alternatives to proprietary models like GPT-4.',
  },
  {
    title: 'A clever way to retrieve information: conversational agents as a tool to access knowledge',
    url: 'https://www.adesso.de/en/news/blog/a-clever-way-to-retrieve-information-conversational-agents-as-a-tool-to-access-knowledge-held-at-the-company.jsp',
    date: '2023-07-01',
    description: 'Explains how to build professional RAG (Retrieval-Augmented Generation) systems using Aleph Alpha’s Luminous and vector databases.',
  },
  {
    title: 'Quickstart with a European-based LLM: Aleph Alpha\'s \'Luminous\'',
    url: 'https://www.adesso.de/en/news/blog/quickstart-with-a-european-based-large-language-model-aleph-alphas-luminous.jsp',
    date: '2023-07-01',
    description: 'A guide on using the Luminous API for natural language processing tasks.',
  },
  {
    title: 'A brief introduction to automatic document processing with LLMs',
    url: 'https://www.adesso.de/en/news/blog/a-brief-introduction-to-automatic-document-processing-with-large-language-models.jsp',
    date: '2023-05-01',
    description: 'Covers efficient data extraction from documents using few-shot learning and prompt engineering.',
  },
  {
    title: 'Computer vision for deep learning – a brief introduction',
    url: 'https://www.adesso.de/en/news/blog/computer-vision-for-deep-learning-a-brief-introduction.jsp',
    date: '2023-01-01',
    description: 'An overview of end-to-end training in neural networks for tasks like object detection and medical imaging.',
  },
  {
    title: 'Hybrid Search with LangChain and MongoDB for Retrieval Augmented Generation',
    url: 'https://medium.com/@mfmezger/hybrid-search-with-langchain-and-mongodb-for-retrieval-augmented-generation-0f8e8e8e8e8e',
    date: '2024-10-01',
    description: 'A technical deep dive into setting up BM25 + Vector search.',
  },
];

export default data;
