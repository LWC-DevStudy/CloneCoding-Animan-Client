// library
import React from 'react';
import styled from 'styled-components';

// style
import { borderBox } from '../shared/style';
//elements
import Text from './Text';

const Input = ({
  id, 
  type,
  placeholder, 
  value, 
  changeEvent, 
  keyPress, 
  label, 
  ...props
}) => {
  return (
      <>
      {label && (
          <Text magrin="auto" fontWeight="bold">
              {label}
          </Text>
      )}
      <InputStyle
        id={id}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={changeEvent}
        onKeyPress={keyPress}
        {...props}
      />
    </>
  );
};

const InputStyle = styled.input`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  background: ${(props) => props.bgColor};
  color: ${(props) => `rgb(${props.theme.palette[props.color]})`};
  margin: ${(props) => props.margin};
  font-size: ${(props) => props.fontSize};
  line-height: 1.5;
  padding: ${(props) => props.padding};
  border: 1px solid lightgray;
  /* border-color: ${(props) => `rgb(${props.theme.palette.gray})`}; */

  &::placeholder {
    color: ${(props) => `rgb(${props.theme.palette.gray})`};
  }

  &::-webkit-input-placeholder {
    color: ${(props) => `rgb(${props.theme.palette.gray})`};
  }

  &:-ms-input-placeholder {
    color: ${(props) => `rgb(${props.theme.palette.gray})`};
  }

  &:focus {
    color: ${(props) => `rgb(${props.theme.palette.black})`};
    background: ${(props) => `rgb(${props.theme.palette.white})`};
    outline: none;

    &::placeholder {
      color: ${(props) => `rgb(${props.theme.palette.black})`};
    }
    &::-webkit-input-placeholder {
      color: ${(props) => `rgb(${props.theme.palette.black})`};
    }
    &:-ms-input-placeholder {
      color: ${(props) => `rgb(${props.theme.palette.black})`};
    }
  }

  ${(props) => props.addstyle()};
`;

Input.defaultProps = {
  bgColor: 'none',
  type: 'text',
  color: 'black',
  width: '100%',
  fontSize: '14px',
  padding: '6px',
  label: false,
  keyPress: () => {},
  changeEvent: () => {},
  addstyle: () => {},
};

export default Input;