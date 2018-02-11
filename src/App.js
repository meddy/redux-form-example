import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import isAlphanumeric from 'validator/lib/isAlphanumeric';
import isEmpty from 'validator/lib/isEmpty';
import isEmail from 'validator/lib/isEmail';
import isLength from 'validator/lib/isLength';
import isIn from 'validator/lib/isIn';

import Input from './Input';
import Select from './Select';

const validate = ({ name = '', username = '', email = '', subject = '' }) => {
  const errors = {};
  if (isEmpty(name)) {
    errors.name = 'Required';
  }

  if (isEmpty(username)) {
    errors.username = 'Required';
  } else if (!isAlphanumeric(username)) {
    errors.username = 'Username can only contain numbers and letters.';
  } else if (isIn(username, ['taken1234'])) {
    errors.username = 'That username is taken.';
  } else if (!isLength(username, { min: 6 })) {
    errors.username = 'Username must be at least 6 characters.';
  }

  if (isEmpty(email)) {
    errors.email = 'Required';
  } else if (!isEmail(email)) {
    errors.email = 'Email is invalid.';
  }

  if (isEmpty(subject)) {
    errors.subject = 'Required';
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
          <form onSubmit={this.props.handleSubmit} noValidate>
            <Field
              name="name"
              placeholder="Foo Bar"
              label="Name"
              component={Input}
            />
            <Field
              name="username"
              placeholder="fbar1234"
              label="Username"
              success="That username is available."
              icon="user"
              component={Input}
            />
            <Field
              name="email"
              placeholder="foo@bar.com"
              label="Email"
              icon="envelope"
              component={Input}
            />
            <Field name="subject" label="Subject" component={Select}>
              <option>Select</option>
              <option value="business">Business Development</option>
              <option value="marketing">Marketing</option>
              <option value="sales">Sales</option>
            </Field>

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
