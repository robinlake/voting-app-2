import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/App';
import Greetings from './components/Greetings';
import SignupPage from './components/signup/SignupPage';
import LoginPage from './components/login/LoginPage';
import NewEventPage from './components/events/NewEventPage';
import MyPollsPage from './components/polls/myPolls/MyPollsPage';
import AllPollsPage from './components/polls/allPolls/AllPollsPage';
import NewPollPage from './components/polls/newPoll/NewPollPage';

import requireAuth from './utils/requireAuth';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={Greetings} />
    <Route path="signup" component={SignupPage} />
    <Route path="login" component={LoginPage} />
    <Route path="new-event" component={requireAuth(NewEventPage)} />
    <Route path="my-polls" component={requireAuth(MyPollsPage)} />
    <Route path="new-poll" component={requireAuth(NewPollPage)} />
    <Route path="all-polls" component={AllPollsPage} />
  </Route>
)