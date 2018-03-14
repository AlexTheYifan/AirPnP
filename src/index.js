import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import {Router, browserHistory} from "react-router";
import routes from "./routes";
import configureStore from './store/configureStore';
import { loadAircrafts } from './actions/wishlist_compareAction';

const store = configureStore();
store.dispatch(loadAircrafts());

ReactDOM.render(
    <Provider store={store}>
        <Router history={browserHistory} routes={routes} />
    </Provider>, 
    document.getElementById('root'));
registerServiceWorker();