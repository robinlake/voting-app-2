import React from 'react';
import classnames from 'classnames';
import validateInput from '../../../../server/shared/validations/newPoll';
import TextFieldGroup from '../../common/TextFieldGroup';

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

  isValid() {
   const { errors, isValid } = validateInput(this.state);

   if (!isValid) {
     this.setState({ errors });
   }

   return isValid;
  }

  onSubmit(e) {
    e.preventDefault();

    if (this.isValid()) {
      this.setState({ errors: {}, isLoading: true });
      this.props.newPollRequest(this.state).then(
        () => {},
        ({ data }) => this.setState({ errors: data, isLoading: false })
      );
    }
  }

  render() {
    const { errors } = this.state;
    return(
      <div className="row">
        <form onSubmit={this.onSubmit}>
          <h2>Create a new poll </h2>
          
          <TextFieldGroup
            error={errors.pollQuestion}
            label="Poll Question"
            onChange={this.onChange}
            value={this.state.pollQuestion}
            field="pollQuestion"
          />

          <TextFieldGroup
            error={errors.answer1}
            label="Answer 1"
            onChange={this.onChange}
            value={this.state.answer1}
            field="answer1"
          />

          <TextFieldGroup
            error={errors.answer2}
            label="Answer 2"
            onChange={this.onChange}
            value={this.state.answer2}
            field="answer2"
          />

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