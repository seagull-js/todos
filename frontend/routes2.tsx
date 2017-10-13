
 //library imports
import * as React from "react"
import { history } from '@seagull-js/seagull'
import { Provider } from 'mobx-react'
import { Route, Router } from 'react-router';
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

// routing structure
const routes = (
  <Provider { ...stores }>
    <Router history={ browserHistory }>
      <Route path='/' component={ HelloPage }/>
    </Router>
  </Provider>
)

export default routes