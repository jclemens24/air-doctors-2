import React from 'react';
import { useField } from 'formik';
import styled from 'styled-components';

const StyledErrorMessage = styled.span`
  font-size: 12px;
  color: #e03131;
  margin-bottom: 5px;
  font-weight: 500;
`;

const TextInput = ({ children, ...props }) => {
  const [field, meta] = useField(props);

  return (
    <React.Fragment>
      <input
        className={
          meta.touched && meta.error
            ? `formGroupInput invalid`
            : `formGroupInput`
        }
        {...field}
        {...props}
      />
      {meta.touched && meta.error ? (
        <StyledErrorMessage aria-live='polite'>
          {meta.error ? meta.error : '✅'}
        </StyledErrorMessage>
      ) : null}
    </React.Fragment>
  );
};

export default TextInput;
