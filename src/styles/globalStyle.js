import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  background-color: #ddd;
  align-items: center;
  justify-content: ${(props) => (props.center ? 'center' : 'flex-start')};
  flex: 1;
`;

export const InputArea = styled.View`
  padding: 20px;
  width: 100%;
`;

export const CustomButton = styled.TouchableOpacity`
  background-color: #365fb7;
  height: 60px;
  border-radius: 10px;
  align-items: center;
  justify-content: center;
`;

export const CustomButtonText = styled.Text`
  font-size: 14px;
  color: white;
  font-weight: bold;
`;
