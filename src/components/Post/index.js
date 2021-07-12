import React from 'react';
import { AntDesign } from '@expo/vector-icons';
import PostImage from '../../components/PostImage';
// Esse import só é válido para os testes, enquanto
// o app não estiver integrando a API
import defaultPostImage from '../../assets/postImageExample.jpg';
import { Post, PostDate, PostFooter, PostHeader, PostTagsText, PostTitle } from './styles';

export default () => {
  return (
    <Post>
        <PostHeader>
            <PostTitle>Criando um app do zero com React Native para Android e IOS</PostTitle>
            <PostDate>23/09/2020</PostDate>
        </PostHeader>
        <PostImage source={defaultPostImage}/>
        <PostFooter>
            <AntDesign 
                name="tagso"
                color="#4f4f4f"
                size={30}
            />
            <PostTagsText>Mobile, React native, Android, IOS</PostTagsText>
        </PostFooter>
    </Post>
  )
}