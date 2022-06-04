import React, { useEffect } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

import ModalView from '../ModalView';
import CommentTile from '../CommentTile';
import Field from '../Field';
import { LoadingIcon } from '../../../styles/globalStyle';

export default function PostCommentsModal({
  modalizeRef,
  data,
  fieldValue,
  fieldOnChangeText,
  onPress,
  isLoadingComments = false,
}) {
  return (
    <ModalView
      modalizeRef={modalizeRef}
      data={!isLoadingComments ? data : [...data, { id: -1 }]}
      headerComponent={
        <View
          style={{
            padding: 10,
            alignItems: 'center',
            borderTopLeftRadius: 10,
            borderTopRightRadius: 10,
            borderBottomWidth: 1,
            borderBottomColor: '#cfcfcf',
          }}
        >
          <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#4f4f4f' }}>
            Comentários
          </Text>
        </View>
      }
      renderItem={({ item }) => {
        const key = 'comment-' + item.id;
        return item.id === -1 ? (
          <LoadingIcon key={key} size="large" color="#000000" />
        ) : (
          <CommentTile key={key} comment={item} />
        );
      }}
      footerComponent={
        <View
          style={{
            padding: 10,
            alignItems: 'center',
            flexDirection: 'row',
          }}
        >
          <Field
            placeholder={'Adicionar um comentário'}
            value={fieldValue}
            onChangeText={fieldOnChangeText}
          />
          <TouchableOpacity onPress={!isLoadingComments ? onPress : () => {}}>
            <MaterialIcons
              name="send"
              color={'#4f4f4f'}
              size={28}
              style={{ paddingLeft: 25, paddingRight: 5 }}
            />
          </TouchableOpacity>
        </View>
      }
    />
  );
}
