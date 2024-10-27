import styles from '../../styles/LandingPage.module.css'

export const Heading = () => {
  return (
    <>
      <h1 className={`${styles.Head}`}>Tu Portal al Mundo del Anime</h1>
      <p className={`${styles.subtitles}`}>Descubre, sigue y comparte tus animes favoritos en un solo lugar</p>
      <button type="button" className={`${styles.gettingStarted}`}>Comenzar ahora</button>
    </>
  )
}
