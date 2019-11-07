import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import Todos from './components/Page/Todos';
import Users from './components/Page/Users';

import '@fortawesome/fontawesome-free/css/all.min.css';
import '../styles/todo.css';

const Todo = () => (
    <Router>
        <Switch>
            <Route exact path="/">
                <Todos />
            </Route>
            <Route path="/users">
                <Users />
            </Route>
        </Switch>
    </Router>
);

export default Todo;
