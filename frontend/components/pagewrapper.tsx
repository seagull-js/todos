import * as React from 'react'
import { Meta } from '@seagull/core'

export default (props) => (
  <div className="container">
    <Meta title="Seagull ToDo App">
      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" />
    </Meta>
    <h1>Seagull ToDo App</h1>
    <div >{props.children}</div>
  </div>
)