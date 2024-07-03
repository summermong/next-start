import { Suspense } from 'react';
import MovieProvidersInfo from '../../../../../components/movie-providers';

interface IParams {
  params: { id: string };
}

export default async function MovieCredits({ params: { id } }: IParams) {
  return (
    <div>
      <Suspense fallback={<h1>Loading movie info</h1>}>
        <MovieProvidersInfo id={id} />
      </Suspense>
    </div>
  );
}
