import * as React from 'react'
import Document, { Head, Main, NextScript } from 'next/document'
import { renderStatic } from 'glamor/server'

export default class MyDocument extends Document {
  static async getInitialProps ({ renderPage }) {
    const page = renderPage()
    const styles = renderStatic(() => page.html)
    return { ...page, ...styles }
  }

  props: {
    __NEXT_DATA__: any,
    ids: any,
    css: any
  }

  constructor (props) {
    super(props)

    if (this.props.ids) {
      this.props.__NEXT_DATA__.ids = this.props.ids
    }
  }

  render () {
    return (
      <html>
        <Head>
          <style dangerouslySetInnerHTML={{ __html: this.props.css }} />
        </Head>
        <body>
          <Main />

          <NextScript />
        </body>
      </html>
    )
  }
}
