import React from 'react';
import classNames from 'classnames';
import FieldContainer from './FieldContainer';

const Input = ({
  icon,
  input: { value, onChange, name },
  label,
  meta: { error, submitFailed, valid },
  placeholder,
  success
}) => {
  const showError = submitFailed && error;
  const showSuccess = valid && success;
  return (
    <FieldContainer icon={icon} label={label} meta={meta} success={success}>
      <input
        type="text"
        className={classNames('input', {
          'is-danger': showError,
          'is-success': valid
        })}
        placeholder={placeholder}
        name={name}
        onChange={onChange}
        value={value}
      />
    </FieldContainer>
  );
};

Input.defaultProps = {
  success: '',
  icon: ''
};

export default Input;
