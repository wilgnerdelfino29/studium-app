import React from 'react';
import { StatusBar, FlatList, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

// import logoImg from '../../assets/logo.png';
import Post from '../../components/Post/index'

import { Container } from '../../styles/globalStyle';
import { Header, HeaderText, MenuButton } from './styles';

export default function Home() {

    const navigation = useNavigation();

    function navigateToPostDetail() {
        console.log("[NAVEGAÇÃO]"+"Navegando para PostDetail");
        navigation.navigate('PostDetail');
    }

    function openMenu() {
        console.log("[NAVEGAÇÃO]"+"Abrindo Drawer (Menu)");
        navigation.openDrawer();
    }

    return (
        <Container center={false}>
            <StatusBar backgroundColor="#000" />
            <Header>
                <HeaderText>Studium</HeaderText>
                <MenuButton>
                    <MaterialIcons
                        name="menu"
                        color="#FFF" 
                        size={40}
                    />
                </MenuButton>
            </Header>

            {/* Precisa aplicar uma condição para ajustar as tags do post.
            Caso for muito grande, exibir somente o que couber na linha */}

            <FlatList
                data={[1, 2, 3, 4, 5]}
                // Para o key extractor deve ser passado o id do post quando integrar com a API
                keyExtractor={post => String(post)}
                showsVerticalScrollIndicator={false}
                renderItem={() => (
                    <TouchableOpacity onPress={navigateToPostDetail} activeOpacity={1} >
                        <Post/>
                    </TouchableOpacity>
                )}
            />
        </Container>
    )
}