import { useParams } from 'react-router-dom';
import useFetcher from '../hooks/useFetcher';
import DetailsLayout from '../layout/DetailsLayout';

function Details() {
  const { type, id } = useParams();
  const { data, loading, error } = useFetcher(`${type}/${id}`);

  if (loading) return <p className="text-center py-16">Loading...</p>;
  if (error || !data) return <p className="text-center text-red-500 py-16">{error || 'Not Found'}</p>;

  return (
    <DetailsLayout
      title={data.title}
      subtitle={data.subtitle}
      summary={data.summary}
      links={data.links}
    >
      <div className="space-y-4 text-base leading-relaxed">
        {data.description?.map((para, index) => (
          <p key={index}>{para}</p>
        ))}
        {data.source && <p><strong>Source:</strong> {data.source}</p>}
        {data.confidence && <p><strong>Confidence:</strong> {data.confidence}</p>}
      </div>
    </DetailsLayout>
  );
}

export default Details;
