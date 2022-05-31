import React from 'react';
import { Dimensions } from 'react-native';
import { Modalize } from 'react-native-modalize';

const { height } = Dimensions.get('screen');

export default function ModalView({ modalStyle, modalizeRef, children }) {
  const MODAL_HEIGHT = height * 0.6;

  return (
    <Modalize
      snapPoint={MODAL_HEIGHT}
      modalHeight={MODAL_HEIGHT}
      modalStyle={modalStyle ?? { backgroundColor: '#cfcfcf' }}
      ref={modalizeRef}
      children={children}
    />
  );
}
