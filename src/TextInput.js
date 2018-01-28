import React from 'react';

const TextInput = props => {
  const {
    input: { value, onChange, name },
    meta: { error, submitFailed },
    label,
    placeholder
  } = props;
  console.log(props);
  return (
    <div className="field">
      <label className="label">{label}</label>
      <div className="control">
        <input
          className="input"
          type="text"
          placeholder={placeholder}
          name={name}
          onChange={onChange}
          value={value}
        />
      </div>
      {submitFailed && error && <p className="help is-danger">{error}</p>}
    </div>
  );
};

export default TextInput;
