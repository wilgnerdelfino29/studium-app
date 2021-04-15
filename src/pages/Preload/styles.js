import React from 'react';
import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
    background-color: #FFFFFF;
    flex: 1;
    justify-content: center;
    align-items: center;
`;

export const Logo = styled.Image`
    width: 100%;
    height: 240px;
`;

export const LoadingIcon = styled.ActivityIndicator`
    margin-top: 50px;
`;