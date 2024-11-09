import { FC } from "react"
import { Nav } from "../components/LandingPage/Nav"
import styles from '../../styles/LandingPage.module.css'
import { Heading } from "../components/LandingPage/Heading"
import { Banner } from "../components/LandingPage/Banner"
import { TopAnimes } from "../components/LandingPage/TopAnimes"

export const LandingPage:FC = () => {
  return (
    <main className={styles.main}>
      <div className={`${styles.nav}`}>
        <Nav />
      </div>
      <div className={`${styles.heading}`}>
        <Heading />
      </div>
      <div className={`${styles.banner}`}>
        <Banner />
      </div>
      <div className={`${styles.TopAnimes}`}>
        <TopAnimes />
      </div>
    </main>
  )
}
