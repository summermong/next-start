import { Suspense } from 'react';
import MovieCreditsInfo from '../../../../../components/movie-credits';

interface IParams {
  params: { id: string };
}

export default async function MovieCredits({ params: { id } }: IParams) {
  return (
    <div>
      <Suspense fallback={<h1>Loading movie info</h1>}>
        <MovieCreditsInfo id={id} />
      </Suspense>
    </div>
  );
}
