import React, { useState } from 'react';
import { View, Image, Text, FlatList, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

// import logoImg from '../../assets/logo.png';

// Esse import só é válido para os testes, enquanto
// o app não estiver integrando a API
import defaultPostImage from '../../assets/postImageExample.jpg';

import styles from './styles';
import AsyncStorage from '@react-native-community/async-storage';

export default function Home() {

    const navigation = useNavigation();

    function openMenu() {
        console.log("[NAVEGAÇÃO]"+"Abrindo Drawer (Menu)");
        navigation.openDrawer();
    }

    function navigateToPostDetail() {
        console.log("[NAVEGAÇÃO]"+"Navegando para PostDetail");
        navigation.navigate('PostDetail');
    }

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                {/*
                 Logout temporário
                */}
                <TouchableOpacity onPress={()=>{ AsyncStorage.clear(); navigation.navigate('Preload')}} style={styles.logoffButton}>
                    <MaterialIcons name="exit-to-app" style={styles.headerIcon} />
                </TouchableOpacity>

                <Text style={styles.headerText}>
                    Studium
                </Text>

                <TouchableOpacity onPress={openMenu} style={styles.menuButton}>
                    <MaterialIcons name="menu" style={styles.headerIcon} />
                </TouchableOpacity>
            </View>

            {/* Precisa aplicar uma condição para ajustar as tags do post.
            Caso for muito grande, exibir somente o que couber na linha */}

            <FlatList
                style={styles.postList}
                data={[1, 2, 3, 4, 5]}
                // Para o key extractor deve ser passado o id do post quando integrar com a API
                keyExtractor={post => String(post)}
                showsVerticalScrollIndicator={false}
                renderItem={() => (

                    <View style={styles.post}>

                        <View style={styles.postHeader}>
                            <Text style={styles.postTitle}>Criando um app do zero com React Native para Android e IOS</Text>
                            <Text style={styles.postDate}>23/09/2020</Text>
                        </View>

                        <TouchableOpacity onPress={navigateToPostDetail} activeOpacity={1}>
                            <Image source={defaultPostImage} style={styles.postImage} />
                        </TouchableOpacity>

                        <View style={styles.postFooter}>
                            <AntDesign name="tagso" style={styles.postTagsIcon} />
                            <Text style={styles.postTagsText}>Mobile, React native, Android, IOS</Text>
                        </View>

                    </View>
                )}
            />
            
        </View>
    )
}