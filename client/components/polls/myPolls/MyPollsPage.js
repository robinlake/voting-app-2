import React from 'react';
import MyPolls from './MyPolls';

class MyPollsPage extends React.Component {
  render() {
    return(
      <div className="row">
        <div className="col-md-4 col-md-offset-4">
          <MyPolls />
        </div>
      </div>
    )
  }
}

export default MyPollsPage;