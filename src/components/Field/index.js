import React from 'react';
import styled from 'styled-components/native';
import { AntDesign } from '@expo/vector-icons';

const InputArea = styled.View`
  width: 100%;
  height: 60px;
  padding-left: 15px;
  margin-bottom: 15px;
  border: 1px;
  border-radius: 30px;
  flex-direction: row;
  align-items: center;
`

const Input = styled.TextInput`
  flex: 1;
  font-size: 16px;
  margin-left: 10px;
`

export default ({iconName, placeholder, value, onChangeText, password}) => {
  return (
    <InputArea>
      <AntDesign name={iconName} size={24}/>
      <Input 
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
        secureTextEntry={password}
      />
    </InputArea>
  )
}