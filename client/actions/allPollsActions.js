import axios from 'axios';

export function allPollsRequest() {
  return dispatch => {
    return axios.post('/api/all-polls',);
  }
}