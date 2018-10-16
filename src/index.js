import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import rootReducer from "./reducers";

import { Provider } from "react-redux";

import 'bootstrap/dist/css/bootstrap.min.css';
import "./index.css";

import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

import { BrowserRouter, Route, Switch } from 'react-router-dom';
import PostsNew from "./containers/posts_new";
import PostsIndex from './containers/posts_index';

import ReduxPromise from 'redux-promise';

const store = createStore(rootReducer, {}, composeWithDevTools(applyMiddleware(ReduxPromise)));


ReactDOM.render(
	<Provider store={store}>
        <BrowserRouter>
            <div>
                <Switch>
                    <Route path="/api/posts/new" component={PostsNew} />
                    <Route exact path='/' component={PostsIndex}/>
                    <Route path="/api/posts" component={PostsIndex} />
                </Switch>
            </div>
        </BrowserRouter>
    </Provider>,
	document.getElementById("root")
);