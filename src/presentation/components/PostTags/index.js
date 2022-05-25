import React from 'react';
import { AntDesign } from '@expo/vector-icons';
import { PostTags, PostTagsText } from './styles';

export default ({ tags }) => {
  const hasTags = tags !== null && tags !== undefined && tags.length > 0;
  return (
    hasTags && (
      <PostTags>
        <AntDesign name="tagso" color="#4f4f4f" size={30} />
        <PostTagsText>{tags}</PostTagsText>
      </PostTags>
    )
  );
};
