import React from 'react';
import styled from 'styled-components/native';

export const Divider = styled.View`
  width: 100%;
  height: 15px;
`;

export const DividerH = styled.View`
  width: 15px;
  height: 100%;
`;

export default () => {
  return <Divider />;
};
