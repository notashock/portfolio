import { useParams } from 'react-router-dom';
import DetailsLayout from '../layout/DetailsLayout';

import projects from '../data/projects';
import skills from '../data/Skills';
import experience from '../data/experience';

function Details() {
  const { type, id } = useParams();

  let data;

  switch (type) {
    case 'project':
      data = projects.find((item) => item.id === id);
      break;
    case 'skills':
      data = skills.find((item) => item.id === id);
      break;
    case 'experience':
      data = experience.find((item) => item.id === id);
      break;
    default:
      data = null;
  }

  if (!data) {
    return (
      <div className="text-center py-16 text-red-500 text-xl">
        Not Found: Invalid ID or Type
      </div>
    );
  }

  return (
    <DetailsLayout
      title={data.title}
      subtitle={data.subtitle}
      summary={data.summary}
      links={data.links}
    >
      <div className="space-y-4 text-base leading-relaxed text-text-light dark:text-text-dark">
        {data.description.map((para, index) => (
          <p key={index}>{para}</p>
        ))}
        {data.source && <p><strong>Source:</strong> {data.source}</p>}
        {data.confidence && <p><strong>Confidence:</strong> {data.confidence}</p>}
      </div>
    </DetailsLayout>
  );
}

export default Details;
