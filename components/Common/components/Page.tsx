import * as React from 'react'
import '../rehydrateGlamor'
import Head from 'next/head'
import { Main } from 'glamorous'

export default ({ title, children }) =>
  <Main margin='6em auto' width='40em'>
    <Head>
      <title>{title}</title>
    </Head>

    {children}
  </Main>
