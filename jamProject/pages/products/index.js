import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { fetchEntries } from '../contentfulProducts'
import Product from '../components/Product'

export default function Home({products}) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Hello Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {products.map((product,index) => (
        <li key={index}>
          <Link href={`/products/${encodeURIComponent(product.title)}`}>
          </Link>
        </li>
      ))}

    </div>
  )
}

export async function getStaticProps() {
  const res = await fetchEntries()
  const products = await res.map((p) => {
    console.log(p.fields);
    return p.fields
  })

  return {
    props: {
      products,
    },
  }
}