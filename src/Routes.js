import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Homepage from './Homepage';
import Company from './Company';
import CompanyList from './CompanyList';
import JobList from './JobList';
import LoginForm from './LoginForm';
import Profile from './Profile';
import SignupForm from './SignupForm';
import HomeAnon from "./HomeAnon";

function Routes({ login, register, token }) {
  return (
    <div>
      <Switch>
        <Route exact path="/">
        {token ? <Homepage/> : <HomeAnon/>}
        </Route>
        <Route exact path="/companies">
          {token ? <CompanyList/> : <Redirect to='/login'/>}
        </Route>
        <Route exact path="/companies/:handle">
          {token ? <Company/> : <Redirect to='/login'/>}
        </Route>
        <Route exact path="/jobs">
          {token ? <JobList/> : <Redirect to='/login'/>}
        </Route>
        <Route exact path="/login">
          <LoginForm login={login}/>
        </Route>
        <Route exact path="/profile">
          {token ? <Profile/> : <Redirect to='/login'/>}
        </Route>"
        <Route exact path="/signup">
          <SignupForm register={register}/>
        </Route>
        <Redirect to="/" />
      </Switch>
    </div>
  );
}

export default Routes;