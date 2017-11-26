import * as React from 'react'
import '../rehydrateGlamor'
import Head from 'next/head'
import { Main } from 'glamorous'

interface PageProps {
  title: string
  children: any
}

export default ({ title, children }: PageProps) =>
  <Main margin='6em auto' width='40em'>
    <Head>
      <title>{title}</title>
    </Head>

    {children}
  </Main>
