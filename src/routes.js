import React from 'react';
import { Route, IndexRoute} from 'react-router';
import App from './components/App';
import SignIn from "./components/signIn/SignIn";
import Chat from "./components/chat/Chat";
import HomePage from "./components/homePage/HomePage";
import Purchase from "./components/purchase/Purchase";
import Wishlist from "./components/wishlist/Wishlist";
import Compare from "./components/compare/Compare";

export default (
    <Route path="/"  component={App}>
        <IndexRoute component={HomePage} />
        <Route path="homePage" component={HomePage} />
        <Route path="wishlist" component={Wishlist} />
        <Route path="compare" component={Compare} />
        <Route path="chat" component={Chat} />
        <Route path="signIn" component={SignIn} />
        <Route path="purchase" component={Purchase} />
    </Route>
);

