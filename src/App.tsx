import React from 'react';
import { BrowserRouter as Router, Route,Switch } from 'react-router-dom';
import { HomePage,SignInPage,RegisterPage, DetailPage } from './pages'


function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={HomePage}></Route>
        <Route path="/signIn" component={SignInPage}></Route>
        <Route path="/register" component={RegisterPage}></Route>
        <Route path="/detail/:touristRouteId" component={DetailPage}></Route>
        <Route render={()=><h1 style={{marginLeft:'auto',marginRight:'auto'}}>404 NOT FOUND</h1>}></Route>
      </Switch>
    </Router>
  );
}

export default App;
