
import { FC } from "react"
import styles from '../../styles/LandingPage.module.css'

export const Nav:FC = () => {
  return (
    <>
      <div className={`${styles.logo}`}>
        <span className={`${styles.Logo}`}>AniHub</span>
      </div>
      <div className={styles.links}>
        <button type="button" className={`${styles.buttonLogin}`}>Iniciar Sesión</button> 
        <button type="button" className={`${styles.buttonRegister}`}>Registrarse</button>
      </div>
    </>
  )
}
