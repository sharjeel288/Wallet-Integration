import React, { useState, useEffect, Fragment } from 'react';
import './App.css';
import Client from './Components/dashoard';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducer/index';
import Spinner from './Components/Layout/Spinner';
import { useWeb3,useEagerConnect } from "@react-dapp/wallet";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const initialState = {};
const store = createStore(
  rootReducer,
  initialState,
  composeEnhancers(applyMiddleware(thunk))
);

function App() {
const [delay, setDelayed] = useState(true);

useEagerConnect();

const { account, web3 } = useWeb3();

  useEffect(() => {
    console.log('from App');
    console.log(account)
    console.log(web3)
    store.dispatch(web3);
  }, []);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setDelayed(false);
    }, 3000);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <Provider store={store}>
      <Fragment>{delay ? <Spinner /> : <Client />}</Fragment>
    </Provider>
  );
}

export default App;

