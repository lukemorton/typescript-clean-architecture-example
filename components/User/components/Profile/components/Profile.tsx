import * as React from 'react'

export default ({ name, biography, twitter }) =>
  <div>
    <p>{name}</p>
    <p>{biography}</p>
    <p>Follow on twitter: {twitter}</p>
  </div>
