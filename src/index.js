import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createStore } from 'redux';
import { Provider } from 'react-redux'; //useful to allow redux store (createStore to interact with our application)
import rootReducer from './reducers/rootReducer';
//create redux store here
//since reducers takes data from the dispatch and components sends data to the dispatch action, then rootReducers needs to be connected to the store
//because its the one that sends the data received to the redux-store. see below 
const store = createStore(rootReducer);


ReactDOM.render(
  <React.StrictMode>
    {/* wrap Provide with our app element so we can pass store into our application */}
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
