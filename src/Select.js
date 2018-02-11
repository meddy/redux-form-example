import PropTypes from 'prop-types';
import React from 'react';
import FieldContainer from './FieldContainer';
import { fieldInputPropTypes, fieldMetaPropTypes } from 'redux-form';

const Select = ({
  input: { value, onChange, name },
  label,
  meta: { error, submitFailed, valid },
  children,
}) => {
  const assignSelected = option =>
    option.value === value
      ? React.cloneElement(option, { selected: true })
      : option;
  return (
    <FieldContainer
      error={error}
      label={label}
      submitFailed={submitFailed}
      valid={valid}
    >
      <div className="select">
        <select onChange={onChange}>
          {React.Children.map(children, assignSelected)}
        </select>
      </div>
    </FieldContainer>
  );
};

Select.propTypes = {
  input: PropTypes.shape(fieldInputPropTypes),
  label: PropTypes.string.isRequired,
  meta: PropTypes.shape(fieldMetaPropTypes),
  success: PropTypes.string,
  children: PropTypes.arrayOf(PropTypes.element),
};

export default Select;
