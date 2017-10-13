import * as React from "react";
import * as ReactDOM from "react-dom";
import { history } from '@seagull-js/seagull'
import { Provider } from 'mobx-react';
import { Route, Router , BrowserRouter} from 'react-router-dom';
import { RouterStore, syncHistoryWithStore } from 'mobx-react-router';
import routes from './routes'
import {createElement} from "react"
// import of stores
import Todos from './stores/todos'
const routingStore = new RouterStore();

const stores = {
  routing: routingStore,
  todos: new Todos()
}
const browserHistory = syncHistoryWithStore(history, routingStore);
const js = (
  <Provider  { ...stores }>
    <Router history={ browserHistory }>
      <Route component={routes[0].component} path={routes[0].path}></Route>
    </Router>
  </Provider>
)
ReactDOM.render(js, document.getElementById('root'))