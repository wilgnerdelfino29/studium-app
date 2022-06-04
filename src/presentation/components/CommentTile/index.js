import React from 'react';
import { View, Text } from 'react-native';
import { toPostCreationDateFormat } from '../../constants/StringFormat';
import Card from '../Card';

export default ({ comment }) => {
  return (
    <View
      style={{
        padding: 10,
        borderBottomWidth: 1,
        borderColor: '#cfcfcf',
      }}
    >
      <Card
        child={
          <View>
            <Text
              style={{
                fontSize: 16,
                fontWeight: 'bold',
                color: '#4f4f4f',
              }}
            >
              {comment.owner}
            </Text>
            <Text
              style={{
                fontSize: 13,
                paddingBottom: 10,
              }}
            >
              {toPostCreationDateFormat(comment.created)}
            </Text>
            <Text
              style={{
                fontSize: 16,
              }}
            >
              {comment.body}
            </Text>
          </View>
        }
      />
    </View>
  );
};
