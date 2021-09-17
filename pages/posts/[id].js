import Layout from '../../components/layout'
import Head from 'next/head'
import { getAllPostIds, getPostData } from '../../lib/posts'
import Date from '../../components/date'


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
    <Head>
      <title>{postData.title}</title>
    </Head>
      <h1>{postData.title}</h1>
      <br/>
      <em>id:</em> {postData.id}
      <br />
      {/* <em>date:</em>{postData.date} */}
      <Date dateString={postData.date} />

      <br />
      <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />

  </Layout>
  )
}