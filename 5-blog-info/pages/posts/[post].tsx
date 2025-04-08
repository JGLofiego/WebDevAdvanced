import { GetStaticPaths, GetStaticProps } from 'next'
import { ParsedUrlQuery } from 'querystring'
import React from 'react'

import CommentSection from '../../components/CommentSection'
import Layout from '../../components/Layout'
import { DataPost } from '../../components/Posts'
import SinglePost from '../../components/SinglePost'
import GlobalStyles from '../../styles/Global'

function PostPg({ post }: { post: DataPost }) {
  return (
    <>
      <GlobalStyles />
      <Layout>
        <SinglePost post={post} />
        <CommentSection />
      </Layout>
    </>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const response = await fetch('http://localhost:8000/posts')
  const data = (await response.json()) as DataPost[]

  const paths = data.map(path => ({ params: { post: path.id.toString() } }))

  return {
    paths,
    fallback: false
  }
}

interface IParams extends ParsedUrlQuery {
  params: string
}

export const getStaticProps: GetStaticProps = async context => {
  const { post } = context.params as IParams
  const response = await fetch(`http://localhost:8000/posts/${post as string}`)
  const data = (await response.json()) as DataPost

  return { props: { post: data } }
}

export default PostPg
