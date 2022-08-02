import React from 'react'
import Head from 'next/head'

function Meta({title, keywords, description}) {
  return (
   <Head>
       <meta name='viewport' content='width=device-width' />
       <meta name='keywords' content={keywords}/>
       <meta name='description' content={description}/>
       <meta charSet='utf-8' />
       <title>{title}</title>
   </Head>
  )
}

Meta.defaultProps = {
    title: 'Katherine K Catchin Up Blog',
    keywords: 'Blog, Development',
    description: 'Katherine K. blog of life, reads, and travels'
}

export default Meta