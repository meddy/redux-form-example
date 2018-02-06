import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import { fieldInputPropTypes, fieldMetaPropTypes } from 'redux-form';
import FieldContainer from './FieldContainer';

const Input = ({
  icon,
  input: { value, onChange, name },
  label,
  meta: { error, submitFailed, valid },
  placeholder,
  success,
}) => (
  <FieldContainer
    icon={icon}
    label={label}
    error={error}
    submitFailed={submitFailed}
    success={success}
    valid={valid}
  >
    <input
      type="text"
      className={classNames('input', {
        'is-danger': submitFailed && error,
        'is-success': valid,
      })}
      placeholder={placeholder}
      name={name}
      onChange={onChange}
      value={value}
    />
  </FieldContainer>
);

Input.propTypes = {
  icon: PropTypes.string,
  input: PropTypes.shape(fieldInputPropTypes),
  label: PropTypes.string.isRequired,
  meta: PropTypes.shape(fieldMetaPropTypes),
  placeholder: PropTypes.string,
  success: PropTypes.string,
};

export default Input;
