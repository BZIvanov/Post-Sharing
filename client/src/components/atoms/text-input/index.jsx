import React from 'react';
import styled from 'styled-components';

const InputCss = styled.input`
  color: ${(props) => props.theme.palette.e};
  padding: 0.5rem;
  border: none;
  outline: none;
  font-size: 1rem;
  border-bottom: ${(props) => '2px solid' + props.theme.palette.b};
  ::placeholder {
    color: ${(props) => props.theme.palette.e};
    transition: color 1s ease;
  }
  &:hover {
    border-bottom: ${(props) => '2px solid' + props.theme.palette.e};
  }
  &:hover::placeholder {
    color: ${(props) => props.theme.palette.d};
  }
`;

const TextInput = React.forwardRef((props, ref) => {
  return <InputCss ref={ref} type="text" {...props} />;
});

export default TextInput;
