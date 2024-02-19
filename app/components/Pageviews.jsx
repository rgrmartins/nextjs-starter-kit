import { wait } from '@/lib/posts'
import React from 'react'

const PageViews = async ({ slug }) => {
  // Fetch page view from DB
  // const views = await getPageView(slug)

  await wait(2000)

  return (
    <div>Views: 100</div>
  )
}

export default PageViews