import Layout from '../../components/layout'
import Head from 'next/head'
import { getAllPostIds, getPostData } from '../../lib/posts'
import Date from '../../components/date'
import styles from '../../components/layout.module.css'


export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id)

  return {
    props: {
      postData
    }
  }
}

export async function getStaticPaths() {
  const paths = getAllPostIds()
  return {
    paths,
    fallback: false
  }
}

export default function Post({postData}) {
  return (
  <Layout>
    <div className={styles.posts}>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <h1>{postData.title}</h1>
      <Date dateString={postData.date} />
      <br />
    
      <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
    </div>
  </Layout>
  )
}