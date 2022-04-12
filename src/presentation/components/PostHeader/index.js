import React from 'react';
import { View } from 'react-native';

import { PostDate, PostTitle } from './styles';

export default ({ title, date }) => {
  return (
    <View>
      <PostTitle>{title}</PostTitle>
      <PostDate>{date}</PostDate>
    </View>
  );
};
