import React from 'react';

class NewPollForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pollQuestion: '',
      answer1: '',
      answer2: ''
    }

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e){
    this.setState({[e.target.name]: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();
    this.props.newPollRequest(this.state);
  }

  render() {
    return(
      <div className="row">
        <form onSubmit={this.onSubmit}>
          <h2>Create a new poll </h2>
          <div className="form-group">
            <label className="control-label">Poll Question</label>
            <input
              value={this.state.pollQuestion}
              onChange={this.onChange}
              type="text"
              name="pollQuestion"
              className="form-control"
              />
          </div>

          <div className="form-group">
            <label className="control-label">Answer 1</label>
            <input
              value={this.state.answer1}
              onChange={this.onChange}
              type="text"
              name="answer1"
              className="form-control"
              />
          </div>

          <div className="form-group">
            <label className="control-label">Answer 2</label>
            <input
              value={this.state.answer2}
              onChange={this.onChange}
              type="text"
              name="answer2"
              className="form-control"
              />
          </div>

          <div className="form-group">
            <button className="btn btn-primary btn-lg">
              Create Poll
            </button>
          </div>
        </form>
      </div>
    )
  }
}

NewPollForm.propTypes = {
  newPollRequest: React.PropTypes.func.isRequired
}

export default NewPollForm;