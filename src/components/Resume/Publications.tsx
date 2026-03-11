import type { Publication } from '@/data/resume/publications';

interface PublicationsProps {
  data: Publication[];
}

export default function Publications({ data }: PublicationsProps) {
  return (
    <div className="publications">
      <div className="link-to" id="publications" />
      <div className="title">
        <h3>Publications</h3>
      </div>
      <ul className="publications-list">
        {data.map((pub) => (
          <li key={pub.title} className="publication-item">
            <h4 className="publication-title">{pub.title}</h4>
            <p className="publication-authors">{pub.authors.join(', ')}</p>
            <p className="publication-journal">
              <em>{pub.journal}</em>, {pub.date}
            </p>
            {pub.doi && (
              <a
                href={`https://doi.org/${pub.doi}`}
                target="_blank"
                rel="noreferrer"
                className="publication-doi"
              >
                {pub.doi}
              </a>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
