import React from 'react';
import classNames from 'classnames';

const TextInput = ({
  input: { value, onChange, name },
  meta: { error, submitFailed, valid },
  icon,
  label,
  placeholder,
  success
}) => {
  const showError = submitFailed && error;
  const showSuccess = valid && success;
  return (
    <div className="field">
      <label className="label">{label}</label>
      <div
        className={classNames('control', {
          'has-icons-left': !!icon,
          'has-icons-right': showError || valid
        })}
      >
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
        {!!icon && (
          <span className="icon is-small is-left">
            <i className={classNames('fa', `fa-${icon}`)} />
          </span>
        )}
        {showError && (
          <span className="icon is-small is-right">
            <i className="fa fa-exclamation-triangle" />
          </span>
        )}
        {valid && (
          <span className="icon is-small is-right">
            <i className="fa fa-check" />
          </span>
        )}
      </div>
      {showError && <p className="help is-danger">{error}</p>}
      {showSuccess && <p className="help is-success">{success}</p>}
    </div>
  );
};

TextInput.defaultProps = {
  success: '',
  icon: ''
};

export default TextInput;
