import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Home from './pages/Home';
import Store from './pages/Store';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' exact component={Home}/>
        <Route path='/fire' exact component={Store}/>
        <Route path='/water' exact component={Store}/>
        <Route path='/normal' exact component={Store}/>
        <Route path='/fighting' exact component={Store}/>
        <Route path='/flying' exact component={Store}/>
        <Route path='/poison' exact component={Store}/>
        <Route path='/ground' exact component={Store}/>
        <Route path='/rock' exact component={Store}/>
        <Route path='/bug' exact component={Store}/>
        <Route path='/ghost' exact component={Store}/>
        <Route path='/steel' exact component={Store}/>
        <Route path='/grass' exact component={Store}/>
        <Route path='/psychic' exact component={Store}/>
        <Route path='/ice' exact component={Store}/>
        <Route path='/dragon' exact component={Store}/>
        <Route path='/fairy   ' exact component={Store}/>
    
      </Switch>
    </BrowserRouter>
  )
}

