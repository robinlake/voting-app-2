import React from 'react';
import classnames from 'classnames';

class NewPollForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pollQuestion: '',
      answer1: '',
      answer2: '',
      errors: {},
      isLoading: false
    }

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e){
    this.setState({[e.target.name]: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();
    this.setState({ errors: {}, isLoading: true });
    this.props.newPollRequest(this.state).then(
      () => {},
      ({ data }) => this.setState({ errors: data, isLoading: false })
    );
  }

  render() {
    const { errors } = this.state;
    return(
      <div className="row">
        <form onSubmit={this.onSubmit}>
          <h2>Create a new poll </h2>
          <div className={classnames("form-group", { 'has-error': errors.pollQuestion })}>
            <label className="control-label">Poll Question</label>
            <input
              value={this.state.pollQuestion}
              onChange={this.onChange}
              type="text"
              name="pollQuestion"
              className="form-control"
              />
              {errors.pollQuestion && <span className="help-block">{errors.pollQuestion}</span> }
          </div>

          <div className={classnames("form-group", { 'has-error': errors.answer1 })}>
            <label className="control-label">Answer 1</label>
            <input
              value={this.state.answer1}
              onChange={this.onChange}
              type="text"
              name="answer1"
              className="form-control"
              />
              {errors.answer1 && <span className="help-block">{errors.answer2}</span> }
          </div>

          <div className={classnames("form-group", { 'has-error': errors.answer2 })}>
            <label className="control-label">Answer 2</label>
            <input
              value={this.state.answer2}
              onChange={this.onChange}
              type="text"
              name="answer2"
              className="form-control"
              />
              {errors.answer2 && <span className="help-block">{errors.answer2}</span> }
          </div>

          <div className="form-group">
            <button disabled={this.state.isLoading} className="btn btn-primary btn-lg">
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