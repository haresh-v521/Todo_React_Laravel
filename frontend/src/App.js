import React from 'react';
import './App.css';
import MainPart from './components/MainPart';
import {Route, Switch} from "react-router-dom";
import Signin from './components/Signin';
import Signup from './components/Signup';
import Todo from './components/Todo';
import Error from './components/Error';

function App() {
  return (
    <>
   <Switch>
     <Route exact path="/" component={Signin} />
     <Route path="/Signin" component={Signin} />
     <Route path="/Signup" component={Signup} />
     <Route path="/Todo" component={Todo} />
     <Route  component={Error} />
   </Switch>
     <MainPart/>
    {/* <br/><br/><br/><br/>
    <Signin />
    <Signup /> */}
  {/* <TransactionList /> */}
   </>
     
  );
}

export default App;
