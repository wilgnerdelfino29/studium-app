import React from 'react';
import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
    background-color: #FFFFFF;
    align-items: center;
    justify-content: center;
    flex: 1;
`;

export const Logo = styled.Image`
    width: 50%;
    height: 120px;
`;

export const InputArea = styled.View`
    padding: 20px;
    width: 100%;
`;

export const CustomButton = styled.TouchableOpacity`
    background-color: #365FB7;
    height: 60px;
    border-radius: 30px;
    align-items: center;
    justify-content: center;
`;

export const CustomButtonText = styled.Text`
    font-size: 14px;
    color: #FFF;
    font-weight: bold;
`;

export const SignMessageButton = styled.TouchableOpacity`
    flex-direction: row;
    justify-content: center;
    margin-top: 10px;
    margin-bottom: 20px;
`;

export const SignMessageButtonText = styled.Text`
    font-size: 13px;
`;

export const SignMessageButtonTextBold = styled.Text`
    font-size: 13px;
    font-weight: bold;
    margin-left: 5px;
`;