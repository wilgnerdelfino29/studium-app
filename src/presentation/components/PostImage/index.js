import React from 'react';
import { View } from 'react-native';
import styled from 'styled-components/native';

const PostImage = styled.Image`
  height: undefined;
  width: 100%;
  aspect-ratio: 1.776315789473684;
  background-color: black;
`;

export default ({ source, isUri = false }) => {
  return source === '' ? (
    <View />
  ) : (
    <PostImage source={isUri ? { uri: source } : source} />
  );
};
