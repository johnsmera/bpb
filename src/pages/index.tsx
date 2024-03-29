import type { NextPage } from 'next'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>
          Playmatch is <a href="https://playmatch.gg">GG!</a>
        </h1>
      </main>
    </div>
  )
}

export default Home
