import Head from 'next/head'
import Image from 'next/image'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import { getSortedPostsData } from '../lib/posts'

export async function getStaticProps(){
  const allPosts = getSortedPostsData()
  return {
    props: {
      allPosts
    }
  }
}

export default function AllPosts({ allPosts }) {
  return (
    <Layout>
      <Head>
        <title>{siteTitle}</title>
      </Head>
        <h1 className={utilStyles.headlingLg}>Curated</h1>
        {allPosts.map(({id,path,title,cover}) =>(
          <div className={utilStyles.listItem} key={id}>
            <div className={utilStyles.listItemPic}>
                <Image 
                    priority
                    src={cover}
                    alt="cover pic"
                    height={400}
                    width={400}
                    layout="responsive"
                    />
            </div>
            <h3><a href={"/posts/" + path}>{title}</a></h3>
          </div>
          
        ))}
        
    </Layout>
  )
}
