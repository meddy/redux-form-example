import React, { Component } from 'react';
import { Field, Form, reduxForm } from 'redux-form';
import TextInput from './TextInput';

const validate = values => {
  const errors = {};
  if (!values.name) {
    errors.name = 'Required';
  }

  return errors;
};

class App extends Component {
  // create profile
  // name (required,
  // email
  // password
  // password confirm
  render() {
    return (
      <section className="section">
        <div className="container">
          <h1 className="title">redux-form test</h1>
          <form onSubmit={this.props.handleSubmit}>
            <Field
              name="name"
              placeholder="Foo Bar"
              label="Name"
              component={TextInput}
            />

            <div className="field">
              <label className="label">Username</label>
              <div className="control has-icons-left has-icons-right">
                <input
                  className="input is-success"
                  type="text"
                  placeholder="Text input"
                  value="bulma"
                />
                <span className="icon is-small is-left">
                  <i className="fa fa-user" />
                </span>
                <span className="icon is-small is-right">
                  <i className="fa fa-check" />
                </span>
              </div>
              <p className="help is-success">This username is available</p>
            </div>

            <div className="field">
              <label className="label">Email</label>
              <div className="control has-icons-left has-icons-right">
                <input
                  className="input is-danger"
                  type="email"
                  placeholder="Email input"
                  value="hello@foo.com"
                />
                <span className="icon is-small is-left">
                  <i className="fa fa-envelope" />
                </span>
                <span className="icon is-small is-right">
                  <i className="fa fa-exclamation-triangle" />
                </span>
              </div>
              <p className="help is-danger">This email is invalid</p>
            </div>

            <div className="field">
              <label className="label">Subject</label>
              <div className="control">
                <div className="select">
                  <select>
                    <option>Select dropdown</option>
                    <option>With options</option>
                  </select>
                </div>
              </div>
            </div>

            <div className="field">
              <label className="label">Message</label>
              <div className="control">
                <textarea className="textarea" placeholder="Textarea" />
              </div>
            </div>

            <div className="field">
              <div className="control">
                <label className="checkbox">
                  <input type="checkbox" />
                  &nbsp;I agree to the <a href="#">terms and conditions</a>
                </label>
              </div>
            </div>

            <div className="field">
              <div className="control">
                <label className="radio">
                  <input type="radio" name="question" />
                  &nbsp;Yes
                </label>
                <label className="radio">
                  <input type="radio" name="question" />
                  &nbsp;No
                </label>
              </div>
            </div>

            <div className="field is-grouped">
              <div className="control">
                <button className="button is-link" type="submit">Submit</button>
              </div>
              <div className="control">
                <button className="button is-text">Cancel</button>
              </div>
            </div>
          </form>
        </div>
      </section>
    );
  }
}

const withForm = reduxForm({
  form: 'contact',
  onSubmit: result => console.log(result),
  validate
});

export default withForm(App);
