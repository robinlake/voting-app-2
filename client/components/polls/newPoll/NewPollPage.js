import React from 'react';
import NewPollForm from './NewPollForm';

class NewPollPage extends React.Component {
  render() {
    return(
      <div className="row">
        <div className="col-md-4 col-md-offset-4">
          <NewPollForm />
        </div>
      </div>
    )
  }
}

export default NewPollPage;