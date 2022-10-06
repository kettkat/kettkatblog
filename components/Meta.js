import React from 'react'
import Head from 'next/head'

function Meta({title, keywords, description}) {
  return (
   <Head>
       <meta name='viewport' content='width=device-width' />
       <meta name='keywords' content={keywords}/>
       <meta name='description' content={description}/>
       <meta charSet='utf-8' />
       <meta lang='en'/>
       <title>{title}</title>
       <link rel='shortcut icon' href='/favicon.ico'/>
       <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"></link>
	    <link rel="shortcut icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"></link>
	    <link rel="shortcut icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"></link>
   </Head>
  )
}

Meta.defaultProps = {
    title: 'Katherine K Catchin Up Blog',
    keywords: 'Blog, Development',
    description: 'Katherine K. blog of life, reads, and travels'
}

export default Meta