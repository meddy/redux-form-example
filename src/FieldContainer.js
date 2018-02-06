import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

const FieldContainer = ({
  children,
  error,
  icon,
  label,
  submitFailed,
  success,
  valid,
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

FieldContainer.propTypes = {
  children: PropTypes.node.isRequired,
  error: PropTypes.string,
  icon: PropTypes.string,
  label: PropTypes.string.isRequired,
  submitFailed: PropTypes.bool.isRequired,
  success: PropTypes.string,
  valid: PropTypes.bool.isRequired,
};

export default FieldContainer;
