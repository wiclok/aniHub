import { FC } from 'react';
import styles from '../../styles/LandingPage.module.css';
import { Star } from 'lucide-react';

// const TopAnimesData = [
//   {
//     image: '/my-Hero-Academia.jpg',
//     title: 'My Hero Academia',
//     star: '8.7',
//   },
// ]

export const TopAnimes: FC = () => {
  return (
    <>
      <h1>Animes destacados</h1>
          <div className={styles.cardWrapper}>
            <div className={styles.cardAnime}>
              <div className={styles.cardAnimeImage}>
                <img src={'./attackOnTitan.jpeg'} alt={'titulo'} />
              </div>
              <div className={`${styles.cardAnimeData}`}>
                <h2>Attack on Titan</h2>
                <p><Star size={15} color='#FACC15'/>8.7</p>
              </div>
            </div>
            <div className={styles.cardAnime}>
              <div className={styles.cardAnimeImage}>
                <img src={'./my-Hero-Academia.jpg'} alt={'titulo'} />
              </div>
              <div className={`${styles.cardAnimeData}`}>
                <h2>My Hero Academia</h2>
                <p><Star size={15} color='#FACC15' />8.7</p>
              </div>
            </div>
            <div className={styles.cardAnime}>
              <div className={styles.cardAnimeImage}>
                <img src={'./DemonSlayer.jpg'} alt={'titulo'} />
              </div>
              <div className={`${styles.cardAnimeData}`}>
                <h2>Demon Slayer</h2>
                <p><Star size={15} color='#FACC15' />8.7</p>
              </div>
            </div>
          </div>
    </>
  );
};
