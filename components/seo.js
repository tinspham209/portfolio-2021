import * as React from 'react'
import Head from 'next/head'

export function Seo({ data }) {
  const {
    description = `Tins Pham's homepage`,
    thumbnailUrl = `https://firebasestorage.googleapis.com/v0/b/tinspham-209.appspot.com/o/card.png?alt=media&token=db1e220d-d880-4a0b-9372-7bc90ecf9c7e`,
    title = `Tins Pham Portfolio - Homepage`,
    url = `Tins Pham's homepage`
  } = data
  return (
    <Head>
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />

      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={thumbnailUrl} />

      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={url} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={thumbnailUrl} />
    </Head>
  )
}
