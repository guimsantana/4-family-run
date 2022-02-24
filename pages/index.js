import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>4º Corrida Família Braz e Lima</title>
        <meta name="description" content="Site Oficial da Corrida Família Braz e Lima" />
        <link rel="icon" href="/corredor-1.png" />
      </Head>

      <main className={styles.main}>
        <span>
          <Image src="/corredor-1.png" alt="Logo da corrida" width={140} height={110} />
          <Image src="/corredor-2.png" alt="Logo da corrida" width={140} height={110} />
        </span>
        <h1 className={styles.title}>
          4º Corrida Família Braz e Lima
        </h1>

        <p className={styles.description}>
          Nova Odessa - 10/04/2022
        </p>

        <div className={styles.grid}>
          <Link href="/participantes">
            <a className={styles.card}>
              <h2>Participantes &rarr;</h2>
              <p>Confira todos os participantes inscritos na corrida até o momento!</p>
            </a>
          </Link>

          <a href="" className={styles.card}>
            <h2>Resultados &rarr;</h2>
            <p>Que tal dar uma espiadinha nos resultados das corridas?</p>
          </a>

          <a href="" className={styles.card}>
            <h2>Outras Corridas &rarr;</h2>
            <p>Ta com saudades? Bora relembrar das outras edições da corrida!</p>
          </a>

          <a href="" className={styles.card}>
            <h2>Área do Admin &rarr;</h2>
            <p>Hey, parado ai! Entrada somente de pessoal autorizado! :D</p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href=""
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered By &nbsp;<h2>Guilherme Santana </h2>
        </a>
      </footer>
    </div>
  )
}