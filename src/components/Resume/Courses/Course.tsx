import type { Course as CourseType } from '@/data/resume/courses';

interface CourseProps {
  data: CourseType;
}

export default function Course({ data }: CourseProps) {
  return (
    <li className="certification-container">
      <a href={data.link} target="_blank" rel="noopener noreferrer">
        <span className="certification-number">{data.university}</span>
        <span className="certification-name">{data.title}</span>
      </a>
    </li>
  );
}
