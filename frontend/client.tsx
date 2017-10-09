import * as React from "react";
import * as ReactDOM from "react-dom";
import { history } from '@seagull-js/seagull'
import { Provider } from 'mobx-react';
import { renderRoutes, Route, Router } from 'react-router-dom';
import { RouterStore, syncHistoryWithStore } from 'mobx-react-router';
import routes from './routes'

// import of stores
import Todos from './stores/todos'
const routingStore = new RouterStore();
const stores = {
  routing: routingStore,
  todos: new Todos()
}
const browserHistory = syncHistoryWithStore(history, routingStore);

ReactDOM.render((
  <Provider { ...stores }>
    <Router history={ browserHistory }>
      { renderRoutes(routes) }
    </Router>
  </Provider>
), document.getElementById('root'))