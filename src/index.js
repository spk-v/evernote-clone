import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {createStore, applyMiddleware, compose} from 'redux';
import rootReducer from './store/rootReducer';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import {ReactReduxFirebaseProvider, getFirebase, reduxFirebase} from 'react-redux-firebase';
import {createFirestoreInstance, getFirestore, reduxFirestore} from 'redux-firestore';
import firebase from 'firebase/app';
import fbconfig from './config/fbconfig'

const store=createStore(rootReducer, compose(
  applyMiddleware(thunk.withExtraArgument({getFirebase,getFirestore})), 
  reduxFirestore(fbconfig)
),
)
const rrfProps={
  firebase,
  config: fbconfig,
  dispatch: store.dispatch,
  createFirestoreInstance
}

ReactDOM.render(
  <Provider store={store}>
    <ReactReduxFirebaseProvider {...rrfProps}>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </ReactReduxFirebaseProvider>
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
