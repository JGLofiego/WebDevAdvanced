import { GetStaticProps } from 'next'

import Layout from '../components/Layout'
import Posts, { DataPost } from '../components/Posts'
import GlobalStyles from '../styles/Global'

function Home({ posts }: { posts: DataPost[] }) {
  return (
    <>
      <GlobalStyles />
      <Layout>
        <Posts data={posts} />
      </Layout>
    </>
  )
}

function getPosts() {
  return fetch('http://localhost:8000/posts')
    .then(res => res.json())
    .then((res: DataPost[]) => res)
}

export const getStaticProps: GetStaticProps = async () => {
  const posts = await getPosts()

  return { props: { posts } }
}

export default Home
