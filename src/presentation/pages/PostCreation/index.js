import React, { useState } from 'react';
import {
  View,
  Text,
  ScrollView,
  StatusBar,
  Image,
  Dimensions,
  TextInput,
} from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { FontAwesome, AntDesign } from '@expo/vector-icons';

//components
import Header from '../../components/Header';
import { Divider, DividerH } from '../../components/Divider';
import Field from '../../components/Field';
import PostImage from '../../components/PostImage';
import PostTags from '../../components/PostTags';

//styles
import { Container } from '../../../styles/globalStyle';
import {
  PostCreationContainer,
  CustomButton,
  CustomButtonText,
} from './styles';

export default function PostCreation({ navigation }) {
  const [titleField, setTitleField] = useState('');
  const [contentField, setContentField] = useState('');
  const [image, setImage] = useState('');
  const [tagField, setTagField] = useState('');
  const [tags, setTags] = useState([]);

  const windowWidth = Dimensions.get('window').width;

  function navigateBack() {
    if (navigation.canGoBack()) {
      console.log('[NAVEGAÇÃO]' + 'Retornando a partir de PostCreation');
      navigation.goBack();
    }
  }
  const getImageFromLibrary = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [5331, 3000],
      quality: 1,
    });

    console.log(result);

    if (!result.cancelled) {
      setImage(result.uri);
    }
  };

  const imageName = () => {
    return image.split('/').reverse()[0];
  };

  const openPostCreationToast = () => {};
  const previewPost = () => {};
  const addTag = () => {
    setTags([...tags, tagField]);
    setTagField('');
  };

  return (
    <Container center={false}>
      <StatusBar backgroundColor="#000" />
      <Header
        title="Studium"
        leftButtonOnPress={navigateBack}
        leftButtonIcon="keyboard-backspace"
      />

      <PostCreationContainer>
        <ScrollView
          contentContainerStyle={{
            paddingVertical: 15,
            paddingHorizontal: 15,
          }}
        >
          <View>
            <Field
              placeholder="Defina um título.."
              value={titleField}
              onChangeText={(t) => setTitleField(t)}
            />
            <Divider />
            <View style={{ flexDirection: 'row' }}>
              <Field
                value={image ? imageName() : 'Nenhuma imagem selecionada'}
                disabled={true}
              />
              {image === '' ? (
                <View style={{ flexDirection: 'row' }}>
                  <DividerH />
                  {/* selecionar imagem */}
                  <CustomButton onPress={getImageFromLibrary}>
                    <FontAwesome name="plus" size={24} color="white" />
                  </CustomButton>
                </View>
              ) : (
                <View style={{ flexDirection: 'row' }}>
                  <DividerH />
                  {/* alterar imagem */}
                  <CustomButton onPress={getImageFromLibrary}>
                    <FontAwesome name="pencil" size={24} color="white" />
                  </CustomButton>
                  <DividerH />
                  {/* remover imagem */}
                  <CustomButton onPress={() => setImage('')} error>
                    <FontAwesome name="trash" size={24} color="white" />
                  </CustomButton>
                </View>
              )}
            </View>
            <Divider />
            {image !== '' && (
              <View>
                <PostImage source={image} isUri={true} />
                <Divider />
              </View>
            )}
            <Field
              placeholder="Digite aqui tudo sobre o que quer falar.."
              value={contentField}
              onChangeText={(t) => setContentField(t)}
              multiline={true}
            />
            <Divider />
            {/* tag input */}
            <View style={{ flexDirection: 'row' }}>
              <Field
                placeholder="Adicionar tag.."
                value={tagField}
                onChangeText={(t) => setTagField(t)}
              />
              {tagField.length > 1 && (
                <View style={{ flexDirection: 'row' }}>
                  <DividerH />
                  {/* adicionar tag */}
                  <CustomButton onPress={addTag}>
                    <FontAwesome name="plus" size={24} color="white" />
                  </CustomButton>
                </View>
              )}
            </View>
            <Divider />
            {/* tags adicionadas*/}
            {tags.length > 0 && (
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                }}
              >
                <AntDesign name="tagso" color="#4f4f4f" size={30} />
                <DividerH />
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    backgroundColor: '#888',
                    paddingHorizontal: 15,
                    paddingVertical: 10,
                    minHeight: 40,
                    borderRadius: 10,
                  }}
                >
                  <Text style={{ color: '#ccc' }}>{tags}</Text>
                  <DividerH />
                  <FontAwesome name="close" size={30} color="white" />
                </View>
              </View>
            )}
            <Divider />
            <Divider />
            <View
              style={{ flexDirection: 'row', justifyContent: 'space-between' }}
            >
              <CustomButton
                onPress={previewPost}
                style={{ flexDirection: 'row' }}
              >
                <AntDesign name="eye" size={24} color="white" />
                <DividerH />
                <CustomButtonText>Visualizar</CustomButtonText>
              </CustomButton>
              <DividerH />
              <CustomButton
                onPress={openPostCreationToast}
                style={{ flexDirection: 'row' }}
                success
              >
                <CustomButtonText>Concluído</CustomButtonText>
                <DividerH />
                <FontAwesome name="check" size={24} color="white" />
              </CustomButton>
            </View>
          </View>
        </ScrollView>
      </PostCreationContainer>
    </Container>
  );
}
