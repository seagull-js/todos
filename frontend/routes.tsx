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
  // urgh
  let AppRouter: any = Router
  let routerProps: RouterProps | StaticRouterProps = { history: browserHistory }
  if (isSSR && request) {
    AppRouter = StaticRouter
    routerProps = {
      context: {},
      location: request.path
    }
  }
  return (
    <Provider { ...stores }>
      <AppRouter {...routerProps}>
        <Switch>
          <Route path='/secondPage' component={ HelloPage1 }/>
          <Route path='/' component={ HelloPage }/>
        </Switch>
      </AppRouter>
    </Provider>
  )
}
export default routes