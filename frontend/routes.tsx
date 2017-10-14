//library imports
import * as React from "react"
import { history, Request } from '@seagull-js/seagull'
import { Provider } from 'mobx-react'
import { Route, StaticRouter, Router, Switch, RouterProps, StaticRouterProps } from 'react-router';
import { RouterStore, syncHistoryWithStore } from 'mobx-react-router'

// import of stores
import Todos from './stores/todos'
const routingStore = new RouterStore();
const stores = {
  routing: routingStore,
  todos: new Todos()
}
const browserHistory = syncHistoryWithStore(history, routingStore);

// import of individual pages
import HelloPage from './pages/hello'
import HelloPage1 from './pages/hello.2'

// routing structure
const routes = ( isSSR = false, request?: Request ) => {
  
  let RouterConf: { 
    appRouter: typeof Router,
    routerProps: RouterProps
  } | {
    appRouter: typeof StaticRouter,
    routerProps: StaticRouterProps
  } = {
    appRouter: Router,
    routerProps: { history: browserHistory }
  }
  if (isSSR && request) {
    RouterConf = {
      appRouter: StaticRouter,
      routerProps: {
        context: {},
        location: request.path
      }
    }
  }
  return (
    <Provider { ...stores }>
      <RouterConf.appRouter {...RouterConf.routerProps}>
        <Switch>
          <Route path='/secondPage' component={ HelloPage1 }/>
          <Route path='/' component={ HelloPage }/>
        </Switch>
      </RouterConf.appRouter>
    </Provider>
  )
}
export default routes