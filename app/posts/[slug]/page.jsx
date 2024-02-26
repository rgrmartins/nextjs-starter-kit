import PageViews from '@/app/components/Pageviews'
import { getAllPosts, getPostBySlug } from '@/lib/posts'
import React, { Suspense } from 'react'

import newYork from '@/public/images/new-york-night.jpeg'
import Image from 'next/image'

export async function generateMetadata({ params, searchParams }, parent) {
  const { slug } = params
  const { content, frontmatter } = await getPostBySlug(slug)

  return {
    title: `${frontmatter.title} by ${frontmatter.author}`,
  }
}

export async function generateStaticPaths() {
  const posts = await getAllPosts()
  return posts.map(post => ({
    params: { slug: post.slug }
  }))
}

const Page = async ({params}) => {
  const {slug} = params
  const {content, frontmatter } = await getPostBySlug(slug)
  
  return (
    <section className='py-24'>
      <div className='container'>
        <Image src={newYork} alt='New York City' className='mb-6 rounded-lg' />
        {/* post formatter */}
        <header className='p-8 bg-gray-100 rounded dark:bg-gray-500'>
          <h1 className='font-serif text-3xl'>{frontmatter.title}</h1>
          <p className='mb-6 text-sm font-light leading-snug uppercase -tracking-wide'>{frontmatter.author}</p>

          <Suspense fallback={<div>Loading view count...</div>}>
            <PageViews slug={slug}/>
          </Suspense>
        </header>

        {/* post content */}
        <main className='mt-12 prose'>
          {content}
        </main>
      </div>
    </section>
  )
}

export default Page