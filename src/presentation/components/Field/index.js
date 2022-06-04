import React from 'react';
import styled from 'styled-components/native';
import { AntDesign } from '@expo/vector-icons';

const Field = styled.View`
  width: 100%;
  flex: 1;
  padding-left: 10px;
  padding-right: 10px;
  padding-top: 5px;
  padding-bottom: 5px;
  min-height: ${(props) => (props.multiline ? 200 : 50)}px;
  border-radius: 10px;
  flex-direction: row;
  align-items: center;
  background-color: #eee;
`;

const Input = styled.TextInput.attrs((props) => ({
  placeholderTextColor: props.valid ? 'black' : 'red',
}))`
  font-size: 16px;
  flex: 1;
  height: 100%;
  color: ${(props) => (props.editable ? 'black' : '#ccc')};
`;

export default ({
  iconName = '',
  placeholder,
  value,
  onChangeText,
  password,
  multiline = false,
  disabled = false,
  valid = true,
}) => {
  const paddingValue = iconName !== '' ? 10 : 0;
  const textAlignVertical = multiline ? 'top' : 'center';
  return (
    <Field multiline={multiline}>
      <AntDesign
        name={iconName}
        size={24}
        color={'#4f4f4f'}
        style={{ paddingRight: paddingValue }}
      />
      <Input
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
        secureTextEntry={password}
        multiline={multiline}
        textAlignVertical={textAlignVertical}
        underlineColorAndroid="transparent"
        editable={!disabled}
        selectTextOnFocus={!disabled}
        valid={valid}
      />
    </Field>
  );
};
