import styled from 'styled-components/native';

export const Header = styled.View`
    height: 50;
    width: 100%;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding-bottom: 5;
    padding-left: 10;
    background-color: black;
`

export const HeaderText = styled.Text`
    font-size: 30;
    color: white;
    font-weight: bold;
`

export const MenuButton = styled.TouchableOpacity`
    position: absolute;
    right: 10;
`

