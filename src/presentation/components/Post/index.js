import React from 'react';

//components
import PostImage from '../../components/PostImage';
import PostHeader from '../../components/PostHeader';
import PostTags from '../../components/PostTags';

//styles
import { Post, Padding } from './styles';

//others
import { toPostCreationDateFormat } from '../../constants/StringFormat/index';

export default ({ data }) => {
  const tags = data.categories;
  const hasTags = tags.length > 0;
  return (
    <Post>
      <Padding>
        <PostHeader
          title={data.title}
          date={toPostCreationDateFormat(data.created)}
        />
      </Padding>
      <PostImage source={data.images} isUri={true} />
      {hasTags && <PostTags tags={tags.join(', ')} />}
    </Post>
  );
};
