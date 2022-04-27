import Head from 'next/head'
import Hero from '../components/Hero'
import Layout from '../components/Layout'
import Projects from '../components/Projects'
// import style from '../styles/home.module.css'



export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Esther Ejidike - Frontend Developer</title>
        <meta name="description" content="A developer seeking to bring value and find happiness" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero/>
      <Projects/>
    </Layout>
  )
}
