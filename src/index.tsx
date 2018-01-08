import * as React from 'react'
import * as ReactDOM from 'react-dom'
import registerServiceWorker from './registerServiceWorker'
import { routes } from './routes'
import { reducers } from './modules'
import { createStore } from 'redux';
import { Provider } from 'react-redux'
import './index.css'

ReactDOM.render(
  <Provider store={createStore(reducers)}>
      {routes}
  </Provider>
  ,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
