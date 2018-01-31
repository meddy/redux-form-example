import React from 'react';
import classNames from 'classnames';

const Select = ({
  input: { value, onChange, name },
  label,
  meta: { error, submitFailed, valid }
}) => {
  return (
    <div className="field">
      <label className="label">{label}</label>
      <div className="control">
        <div className="select">
          <select>
            <option>Select dropdown</option>
            <option>With options</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default Select;