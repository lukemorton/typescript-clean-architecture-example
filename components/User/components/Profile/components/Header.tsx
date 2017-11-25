import * as React from 'react'
import glamorous from 'glamorous'

const Header = glamorous.header({
  fontSize: '1.5em'
})

const Name = glamorous.div({
  fontSize: '2em'
})

const Bio = glamorous.p()

const Twitter = glamorous.p()

interface HeaderProps {
  name: string
  biography: string
  twitter: string
}

export default ({ name, biography, twitter }: HeaderProps) =>
  <Header>
    <Name>{name}</Name>
    <Bio>{biography}</Bio>
    <Twitter>Follow on twitter: {twitter}</Twitter>
  </Header>
