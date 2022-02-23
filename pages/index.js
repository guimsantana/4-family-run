import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div>
      <div className={styles.container}>
        <Head>
          <title>4º Corrida Família Braz e Lima</title>
          <meta name="description" content="Página Oficial da 4º Corrida Família Braz e Lima"/>
          <link rel="icon" href="/corredores.png"/>
        </Head>
        <div className={styles.box}>
          <main className={styles.main}>
            <span>
              <Image src="/atleta-imagem-animada.gif" alt="Logo da corrida" width={140} height={110} />
              <Image src="/atleta-imagem-animada.gif" alt="Logo da corrida" width={140} height={110} />
              <Image src="/atleta-imagem-animada.gif" alt="Logo da corrida" width={140} height={110} />
            </span>
            <h1 className={styles.title}>
              4º Corrida Família Braz e Lima
            </h1>

            <p className={styles.description}>
              Nova Odessa - 10/04/2022
            </p>

            <div className={styles.grid}>
              <a href="" className={styles.card}>
                <h2>Participantes &rarr;</h2>
                <p>Confira todos os participantes inscritos na corrida até o momento!</p>
              </a>

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
        </div>
      </div>
      <footer className={styles.footer}>
        <a href="" target="_blank" rel="noopener noreferrer">
          Powered By &nbsp;<h2>Guilherme Santana</h2>
        </a>
      </footer>
    </div>
  )
}
