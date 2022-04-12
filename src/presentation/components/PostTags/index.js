import React from 'react';
import { AntDesign } from '@expo/vector-icons';
import { PostTags, PostTagsText } from './styles';

export default ({ tags }) => {
  return (
    <PostTags>
      <AntDesign name="tagso" color="#4f4f4f" size={30} />
      <PostTagsText>{tags}</PostTagsText>
    </PostTags>
  );
};
