import React from 'react';
import styled from 'styled-components';

const InputField = styled.input`
  width: 100%;
  padding: 10px;
  margin: 10px 0;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const Input = ({ type, placeholder, value, onChange }) => {
  return <InputField type={type} placeholder={placeholder} value={value} onChange={onChange} />;
};

export default Input;
