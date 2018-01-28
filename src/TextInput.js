import React from 'react';
import classNames from 'classnames';

const TextInput = ({
  input: { value, onChange, name },
  meta: { error, submitFailed, valid },
  label,
  placeholder,
  success
}) => {
  const showError = submitFailed && error;
  const showSuccess = valid && success;
  const inputClassName = classNames({
    input: true,
    'is-danger': showError,
    'is-success': valid
  });
  return (
    <div className="field">
      <label className="label">{label}</label>
      <div className="control">
        <input
          type="text"
          className={inputClassName}
          placeholder={placeholder}
          name={name}
          onChange={onChange}
          value={value}
        />
      </div>
      {showError && <p className="help is-danger">{error}</p>}
      {showSuccess && <p className="help is-success">{success}</p>}
    </div>
  );
};

TextInput.defaultProps = {
  required: false,
  success: ''
};

export default TextInput;
