import React from 'react';
import { View, Image, Text, TouchableOpacity, ScrollView, FlatList } from 'react-native';
import { MaterialIcons, AntDesign, Entypo } from '@expo/vector-icons'; //Back, Tags, Like, Report
import { useNavigation } from '@react-navigation/native';

// Esses imports só são válidos enquanto
// o app não estiver integrando a API
import defaultPostImage from '../../assets/postImageExample.jpg';
import defaultUserImage from '../../assets/userIconExample.png';


import styles from './styles';

export default function PostDetail() {
    
    const navigation = useNavigation();

    function navigateBack() {
        if(navigation.canGoBack()){
            console.log("[NAVEGAÇÃO]"+"Retornando a partir de PostDetail");
            navigation.goBack();
        }
    }

    function touchLikeButton() {
        console.log("[AÇÃO DO USUÁRIO]"+"Tocou em curtir");
    }

    function touchReportButton() {
        console.log("[AÇÃO DO USUÁRIO]"+"Tocou em reportar");
    }

    return (
        <View style={styles.container}>

            <View style={styles.header}>
                <TouchableOpacity onPress={navigateBack} style={styles.goBackButton}>
                    <MaterialIcons name="keyboard-backspace" style={styles.headerIcon} />
                </TouchableOpacity>

                <Text style={styles.headerText}>
                    Studium
                </Text>
            </View>

            {/* Precisa aplicar uma condição para ajustar as tags do post.
            Caso for muito grande, exibir somente o que couber na linha */}

            <ScrollView>
                <View style={styles.post}>
                    
                    <View style={styles.postInfoContainer}>
                        {/* titulo e data */}
                        <Text style={styles.postTitle}>Criando um app do zero com React Native para Android e IOS</Text>
                        <Text style={styles.postDate}>23/09/2020</Text>
                    </View>

                    {/* Imagem */}
                    <Image source={defaultPostImage} style={styles.postImage} />

                    <View style={styles.postInfoContainer}>
                        {/* tags */}
                        <View style={styles.postTags}>
                            <AntDesign name="tagso" style={styles.postTagsIcon} />
                            <Text style={styles.postTagsText}>Mobile, React native, Android, IOS</Text>
                        </View>
                        {/* foto e nome do usuário */}
                        <TouchableOpacity style={styles.postAuthor}>
                            <Image source={defaultUserImage} style={styles.userImage} ></Image>
                            <Text style={styles.postAuthorText}> Alexandre dos Santos Lima</Text>
                        </TouchableOpacity>
                        {/* corpo do post */}
                        <Text style={styles.postBody}>
                            Lorem ipsum dolor sit amet consectetur, adipiscing elit at netus lobortis, conubia maecenas semper tristique. Suspendisse ac ultrices facilisi purus commodo interdum sociosqu in blandit lacus curae magna, vehicula tempus nisl felis netus ut semper eleifend sollicitudin quisque. Consequat malesuada viverra adipiscing interdum dui nostra mi ipsum, tincidunt efficitur hendrerit sit aliquet tellus. Vulputate est rhoncus sodales dui vitae senectus venenatis accumsan ligula, ipsum etiam cras tellus sociosqu eget adipiscing. Porta fames adipiscing class nulla morbi per, purus in aptent himenaeos platea ut, leo eu sociosqu ipsum natoque. Torquent curabitur sapien id tristique venenatis nisi lorem himenaeos sit, vel nascetur lacinia taciti feugiat montes natoque proin non potenti, commodo ligula euismod interdum aliquam risus sagittis cubilia. Etiam phasellus iaculis non nibh nam suspendisse dolor, dis lacinia pharetra nisl ac purus amet, dictumst tincidunt nec convallis in nunc. Himenaeos laoreet leo velit nisl a efficitur conubia nunc, sit lacinia vivamus odio et metus purus, dictum eget litora nisi amet penatibus rutrum.
                            Porttitor justo morbi dictumst netus curae congue vel, sem ad ipsum lacus cras euismod inceptos, diam semper suspendisse tincidunt leo duis. Diam at orci venenatis feugiat mollis pharetra mi, tempus aliquam ligula nunc curabitur proin, eros platea vestibulum fames scelerisque donec. Sollicitudin aliquet volutpat litora hendrerit nec turpis proin congue est, mollis aliquam per himenaeos molestie fringilla consequat dapibus class, ornare adipiscing elementum cras mauris odio tristique libero. Ad platea vitae himenaeos quam curabitur mattis mauris per sollicitudin natoque nostra scelerisque interdum, lacus leo facilisis inceptos mi est quisque dictum nullam sagittis porttitor. Faucibus eros mauris inceptos congue cursus tristique euismod vulputate quis consectetur metus lacus curae, vivamus natoque efficitur nisl malesuada iaculis scelerisque vitae netus amet sem. Eget maecenas eleifend non venenatis praesent metus, taciti lacus per facilisis conubia, fames aliquet iaculis luctus integer. Orci nibh dui efficitur duis ornare scelerisque metus conubia sapien, ultricies taciti enim tempus egestas nullam magnis vel himenaeos, primis ultrices quam ligula euismod nec fames senectus. Egestas aenean eros imperdiet sollicitudin dignissim tincidunt cubilia augue inceptos, maecenas vehicula semper maximus id magna quis sociosqu. Duis finibus adipiscing luctus gravida class diam, laoreet eros leo cras donec accumsan natoque, cursus ipsum elit aliquam nostra. Turpis quam scelerisque euismod inceptos dignissim dis facilisis nascetur dui sodales neque ultricies enim tristique sed, tempus netus aliquam arcu montes erat urna volutpat ac molestie metus lacus cursus dapibus. Feugiat nisi dui sapien lacus pretium class blandit dignissim, enim placerat est dolor tempus convallis quis accumsan nascetur, lorem turpis malesuada imperdiet venenatis aenean tellus.
                        </Text>
                    </View>

                    <View style={[styles.postInfoContainer, styles.postActionContainer]}>
                        {/* reportar */}
                        <TouchableOpacity onPress={touchReportButton} style={[styles.postActionBox, styles.postActionContainer]}>
                            <Entypo name="megaphone" style={styles.reportIcon} />
                            <Text style={styles.reportText}>Reportar post</Text>
                        </TouchableOpacity>

                        {/* curtir */}
                        <View style={[styles.postActionGroup, styles.postActionContainer]}>
                            <Text style={styles.likeText}>130</Text>
                            <TouchableOpacity onPress={touchLikeButton}>
                                <AntDesign name="hearto" style={styles.likeIcon} />
                            </TouchableOpacity>
                        </View>
                    </View>                    
                </View>

                {/* Seção de comentários */}
                
                {/* <View style={styles.postInfoContainer}>
                    <Text style={styles.postCommentsHeaderText}>
                        Comentários
                    </Text>
                    <View style={styles.postCommentsContainer}>
                        <FlatList
                            style={styles.postCommentsList}
                            data={[1, 2, 3, 4, 5]}
                            // Para o key extractor deve ser passado o id do post quando integrar com a API
                            keyExtractor={comment => String(comment)}
                            showsVerticalScrollIndicator={false}
                            renderItem={() => (

                                <View style={styles.commentContainer}>
                                    <Text style={styles.commentAuthor}>
                                        Zezinho
                                    </Text>
                                    <Text style={styles.commentText}>
                                        Muito bacana o assunto, parabéns!
                                    </Text>

                                </View>
                            )}
                        />
                    </View>
                </View> */}
            </ScrollView>

            
            
        </View>
    )
}