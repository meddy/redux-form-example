import React from 'react';
import classNames from 'classnames';

// show error status
// show success status
// success message
// is valid
const FieldContainer = ({
  children,
  icon,
  label,
  meta: { error, submitFailed, valid },
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
        {children}
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

FieldContainer.defaultProps = {
  success: '',
  icon: ''
};

export default FieldContainer;
