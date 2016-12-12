import React from 'react'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'


// parent
import Container from '../components/Container'
// routes
import Home from './Home'
import Profile from './Profile'
import MailContainer from './Mail'
import ProjectContainer from './Projects'
// utility/errors
import Logout from '../components/utils/Logout'
import NotFound from './NotFound'
// children
import Mail from '../components/Mail'
import ProjectOwnerCard from '../components/ProjectOwnerCard'
import ProjectMemberCard from '../components/ProjectMemberCard'
import ProjectApplicantCard from '../components/ProjectApplicantCard'
import NewProject from '../components/NewProject'
// fetch data wrapper
import IntialFetch from '../components/utils/Fetch'
/*
 *
 */
const Routes = function () {
  return (
    <Router history={browserHistory}>
      <Route path="/" component={IntialFetch(Container)}>
        <IndexRoute component={Home} />
        //
        <Route path="mail" component={MailContainer}>
          <Route path=":id" component={Mail} />
        </Route>
        //
        <Route path="/projects" component={ProjectContainer}>
          <IndexRoute component={ProjectOwnerCard} />
          <Route path="member" component={ProjectMemberCard} />
          <Route path="applicant" component={ProjectApplicantCard} />
          <Route path="new" component={NewProject} />
        </Route>
        //
        <Route path="/profile" component={Profile} />
        <Route path="/logout" component={Logout} />
        <Route path="*" component={NotFound} />
      </Route>
    </Router>
  )
}


export default Routes;
