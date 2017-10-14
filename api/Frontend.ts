// library imports
import { API, Request, Response } from '@seagull-js/seagull'
import { match, matchPath, StaticRouter } from 'react-router'
import * as ReactDOMServer from 'react-dom/server';
import * as React from 'react'
import * as ReactRouter from 'react-router'
const renderToString = ReactDOMServer.renderToString
const createElement = React.createElement

// configuration imports
import layout from '../frontend/layout'
import routes from '../frontend/routes'

// Server Side Rendering for the frontend
export default class Frontend extends API {
  static method = 'GET'
  static path = '/*'
  async handle(request: Request): Promise<Response> {
    return this.html(renderToString(layout({ children:routes(true, request) })))
  }
}