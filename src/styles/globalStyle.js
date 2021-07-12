import styled from 'styled-components/native';
import Constants from 'expo-constants';

export const Container = styled.SafeAreaView`
    /* padding-top: ${Constants.statusBarHeight}px; */
    background-color: white;
    align-items: center;
    justify-content: ${props => props.center == true 
        ? 'center' 
        : 'flex-start'};
    flex: 1;
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
    color: white;
    font-weight: bold;
`;