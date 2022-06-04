import React from 'react';
import { Dimensions } from 'react-native';
import { Modalize } from 'react-native-modalize';

const { height } = Dimensions.get('screen');

export default function ModalView({
  modalizeRef,
  modalStyle,
  data,
  renderItem,
  headerComponent,
  footerComponent,
  adjustToContentHeight = true,
}) {
  const MODAL_HEIGHT = height * 0.75;

  return (
    <Modalize
      ref={modalizeRef}
      snapPoint={adjustToContentHeight === false ? MODAL_HEIGHT : null}
      modalHeight={adjustToContentHeight === false ? MODAL_HEIGHT : null}
      withHandle={false}
      adjustToContentHeight={adjustToContentHeight}
      disableScrollIfPossible={!adjustToContentHeight}
      HeaderComponent={headerComponent}
      FooterComponent={footerComponent}
      modalStyle={modalStyle}
      flatListProps={{
        data: data,
        renderItem: renderItem,
        keyExtractor: (item) => item.id,
        showsVerticalScrollIndicator: false,
        onContentSizeChange: () => {
          console.log('<<<');
          console.log(modalizeRef);
          // this.scrollView.scrollToEnd({ animated: true });
        },
      }}
    />
  );
}
