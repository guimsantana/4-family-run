import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import ImageSlider from '../components/ImageSlider'
import { SliderData } from '../components/SliderData';

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
                Participantes
                </h1>
                <p/>

                <ImageSlider slides={SliderData} />
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