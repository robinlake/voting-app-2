import React from 'react';
import NewPollForm from './NewPollForm';
import { connect } from 'react-redux';
import { newPollRequest } from '../../../actions/newPollActions';

class NewPollPage extends React.Component {
  render() {
    const { newPollRequest } = this.props;
    return(
      <div className="row">
        <div className="col-md-4 col-md-offset-4">
          <NewPollForm newPollRequest={newPollRequest} />
        </div>
      </div>
    )
  }
}

NewPollPage.propTypes = {
  newPollRequest: React.PropTypes.func.isRequired
}

export default connect(null, { newPollRequest })(NewPollPage);