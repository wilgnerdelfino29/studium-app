import styled from 'styled-components/native';

export const PostCreationContainer = styled.View`
  background-color: #fff;
  width: 100%;
  flex: 1;
  /* padding-left: 20px;
  padding-right: 20px; */
`;

export const CustomButton = styled.TouchableOpacity`
  background-color: ${(props) =>
    props.success ? 'green' : props.error ? 'red' : '#365fb7'};
  height: 60px;
  border-radius: 10px;
  align-items: center;
  justify-content: center;
  padding-left: 20px;
  padding-right: 20px;
`;

export const CustomButtonText = styled.Text`
  font-size: 14px;
  color: white;
  font-weight: bold;
`;

export const CustomButtonIcon = styled.Text`
  font-size: 14px;
  color: white;
  font-weight: bold;
`;
