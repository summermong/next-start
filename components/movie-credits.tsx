import { API_URL } from '../app/constants';
import styles from '../styles/movie-credits.module.css';

export async function getCredits(id: string) {
  const response = await fetch(`${API_URL}/${id}/credits`);
  return response.json();
}

export default async function MovieCreditsInfo({ id }: { id: string }) {
  const credits = await getCredits(id);

  return (
    <div className={styles.credits}>
      {credits.map(credit => (
        <div key={credit.id}>
          {credit.known_for_department}: {credit.name}
        </div>
      ))}
    </div>
  );
}
