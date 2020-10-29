import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import { Login } from './pages/login';
import { Main } from './pages/users/main';
import { UserInfo } from './pages/users/UserInfo';
import { UserCreate } from './pages/users/UserCreate';
import { UserEdit } from './pages/users/UserEdit';

function App() {
  return (
    <Switch>
      <Route exact path="/" component={Login} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/main" component={Main} />
      <Route exact path="/users/create" component={UserCreate} />
      <Route exact path="/users/edit/:id" component={UserEdit} />
      <Route exact path="/users/manager" component={Main} />
      <Route exact path="/users/info" component={UserInfo} />
    </Switch>
  );
}

export default App;
