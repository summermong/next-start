import { API_URL } from '../app/constants';
import styles from '../styles/movie-providers.module.css';

export async function getProviders(id: string) {
  const response = await fetch(`${API_URL}/${id}/providers`);
  return response.json();
}

export default async function MovieProvidersInfo({ id }: { id: string }) {
  const providers = await getProviders(id);

  // 국가 정보를 저장할 배열
  const countriesInfo = [];

  for (let countryCode in providers) {
    if (providers.hasOwnProperty(countryCode)) {
      let countryInfo = providers[countryCode];
      let countryName = countryInfo.country_name;
      let watchLink = countryInfo.link;
      let providerName = countryInfo.flatrate[0].provider_name;

      // 각 국가의 정보를 배열에 추가
      countriesInfo.push(
        <div key={countryCode} className={styles.providers}>
          <div>Country Code: {countryCode}</div>
          <div>Country Name: {countryName}</div>
          <div>
            Watch Link: <a href={watchLink}>{watchLink}</a>
          </div>
          <div>Provider: {providerName}</div>
          <hr />
        </div>
      );
    }
  }

  return (
    <div className={styles.providers}>
      <div>Movie Providers Information</div>
      {countriesInfo} {/* 배열에 저장된 각 국가 정보를 출력 */}
    </div>
  );
}
