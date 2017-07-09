import React from 'react';
import AllPolls from './AllPolls';

class AllPollsPage extends React.Component {
  render() {
    return(
      <div className="row">
        <div className="col-md-4 col-md-offset-4">
          <AllPolls />
        </div>
      </div>
    )
  }
}

export default AllPollsPage;