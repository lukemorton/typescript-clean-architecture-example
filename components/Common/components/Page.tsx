import * as React from 'react'
import Head from 'next/head'

export default ({ title, children }) =>
  <div>
    <style jsx>{`
      main {
        margin: 6em auto;
        width: 40em;
      }
    `}</style>

    <Head>
      <title>{title}</title>
    </Head>

    <main>
      {children}
    </main>
  </div>
