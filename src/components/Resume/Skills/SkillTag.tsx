import type { CSSProperties } from 'react';

import type { Category, Skill } from '@/data/resume/skills';
import { MAX_COMPETENCY } from '@/lib/utils';

interface SkillTagProps {
  data: Skill;
  categories: Category[];
}

export default function SkillTag({ data, categories }: SkillTagProps) {
  const { category, competency, title } = data;

  // Get the primary category color
  const categoryColor = categories.find((cat) =>
    category.includes(cat.name),
  )?.color;

  // Use consistent size for all tags to avoid "broken" layout, 
  // but keep subtle weight difference if desired
  const sizeClass = 'skill-tag--lg';

  return (
    <span
      className={`skill-tag ${sizeClass}`}
      style={
        {
          '--tag-color': categoryColor,
        } as CSSProperties
      }
      title={`${title}: ${competency} out of ${MAX_COMPETENCY}`}
      aria-label={`${title}: proficiency ${competency} out of ${MAX_COMPETENCY}`}
    >
      <span className="skill-tag-name">{title}</span>
    </span>
  );
}
