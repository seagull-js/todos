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
import routes from '../frontend/routes2'

// Server Side Rendering for the frontend
export default class Frontend extends API {
  static method = 'GET'
  static path = '/*'
  async handle(request: Request): Promise<Response> {
     
    //const renderProps = routes.reduce((acc, route) => matchPath<any>(request.path, route) || acc, null);
    // TODO
    // if (renderProps.redirect) {
    //   return this.redirect(renderProps.redirect)
    // }
    //const children = createElement(StaticRouter, renderProps)
    /*console.log(renderProps)
    const children = (<StaticRouter context={{}}  location={request.path}>
    </StaticRouter>)
    const body = renderToString(layout({ children }))
    const resp = this.html('<!DOCTYPE html>\n' + body)
    console.log(resp, body)*/
    //resp.headers = { 'Content-Type': 'text/html; charset=utf-8' }
    
    return this.html(renderToString(layout({ children:routes })))
  }
}