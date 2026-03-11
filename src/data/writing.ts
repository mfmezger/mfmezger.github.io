export interface WritingItem {
  title: string;
  url: string;
  date: string;
  description: string;
}

const data: WritingItem[] = [
  {
    title: 'LLM operationalisation: a strategic approach for companies',
    url: 'https://www.adesso.de/en/news/blog/llm-operationalisation-a-strategic-approach-for-companies.jsp',
    date: '2024-01-15',
    description: 'Discusses the concept of LLMOps and the challenges of integrating large language models into production environments.',
  },
  {
    title: 'Mistral and Phi – a revolution based on small (fine-tuned) language models?',
    url: 'https://www.adesso.de/en/news/blog/mistral-and-phi-a-revolution-based-on-small-fine-tuned-language-models.jsp',
    date: '2023-12-12',
    description: 'Explores the shift toward smaller, more efficient models and the importance of data quality over model size.',
  },
  {
    title: 'Rust in Python, or the rustification of Python',
    url: 'https://www.adesso.de/en/news/blog/rust-in-python-or-the-rustification-of-python.jsp',
    date: '2023-12-05',
    description: 'Explores combining Python\'s productivity with Rust\'s performance and safety, including tools for interoperability.',
  },
  {
    title: 'A brief introduction to the Rust programming language',
    url: 'https://www.adesso.de/en/news/blog/a-brief-introduction-to-the-rust-programming-language.jsp',
    date: '2023-11-20',
    description: 'An overview of Rust\'s "zero-cost abstractions" and its suitability for performance-critical applications.',
  },
  {
    title: 'Python development best practices part 1 – Tools & Zen',
    url: 'https://www.adesso.de/en/news/blog/python-development-best-practices-part-1-tools-zen.jsp',
    date: '2023-09-15',
    description: 'Co-authored with Moritz Momper, this post covers essential tools like Poetry and the philosophy of the "Zen of Python."',
  },
  {
    title: 'Open source large language models',
    url: 'https://www.adesso.de/en/news/blog/open-source-large-language-models.jsp',
    date: '2023-08-10',
    description: 'Analyzes key open-source models like Llama, BLOOM, and Falcon, emphasizing the democratization of AI.',
  },
  {
    title: 'A clever way to retrieve information: conversational agents as a tool to access knowledge',
    url: 'https://www.adesso.de/en/news/blog/a-clever-way-to-retrieve-information-conversational-agents-as-a-tool-to-access-knowledge-held-at-the-company.jsp',
    date: '2023-07-25',
    description: 'Explains how to build professional RAG (Retrieval-Augmented Generation) systems using Aleph Alpha’s Luminous and vector databases.',
  },
  {
    title: 'Quickstart with a European-based LLM: Aleph Alpha\'s \'Luminous\'',
    url: 'https://www.adesso.de/en/news/blog/quickstart-with-a-european-based-large-language-model-aleph-alphas-luminous.jsp',
    date: '2023-07-10',
    description: 'A guide on using the Luminous API for natural language processing tasks.',
  },
  {
    title: 'A brief introduction to automatic document processing with LLMs',
    url: 'https://www.adesso.de/en/news/blog/a-brief-introduction-to-automatic-document-processing-with-large-language-models.jsp',
    date: '2023-05-20',
    description: 'Covers efficient data extraction from documents using few-shot learning and prompt engineering.',
  },
  {
    title: 'A brief introduction to GPT-4',
    url: 'https://www.adesso.de/en/news/blog/a-brief-introduction-to-gpt-4.jsp',
    date: '2023-04-15',
    description: 'Co-authored with Dr. Hong Chen, providing a history of GPT models and an analysis of GPT-4\'s capabilities.',
  },
  {
    title: 'A look back at the highlights from the world of AI in 2022',
    url: 'https://www.adesso.de/en/news/blog/a-look-back-at-the-highlights-from-the-world-of-ai-in-2022.jsp',
    date: '2023-02-10',
    description: 'A retrospective on major AI breakthroughs, including the release of ChatGPT.',
  },
  {
    title: 'Computer vision for deep learning – a brief introduction',
    url: 'https://www.adesso.de/en/news/blog/computer-vision-for-deep-learning-a-brief-introduction.jsp',
    date: '2023-01-15',
    description: 'Introduces core computer vision disciplines like classification and semantic segmentation.',
  },
  {
    title: 'Hybrid Search with LangChain and MongoDB for Retrieval Augmented Generation',
    url: 'https://medium.com/@mfmezger/hybrid-search-with-langchain-and-mongodb-for-retrieval-augmented-generation-3c2052ec558a',
    date: '2024-10-01',
    description: 'A technical deep dive into setting up BM25 + Vector search.',
  },
];

export default data;
