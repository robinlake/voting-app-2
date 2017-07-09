import axios from 'axios';

export function newPollRequest(newPoll) {
  return dispatch => {
    return axios.post('/api/new-poll', newPoll);
  }
}