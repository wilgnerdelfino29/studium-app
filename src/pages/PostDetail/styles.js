import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

export default StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: Constants.statusBarHeight,
        backgroundColor: '#FFF',
    },
    header: {
        height: 50,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        paddingBottom: 5,
        paddingLeft: 10,
        backgroundColor: '#000',
    },
    headerIcon: {
        color: '#FFF',
        fontSize: 40,
    },
    headerText: {
        fontSize: 30,
        color: '#FFF',
        fontWeight: 'bold',
    },
    goBackButton: {
        position: 'absolute',
        left: 10,
    },
    menuButton: {
        position: 'absolute',
        right: 10,
    },
    postList: {
        backgroundColor: '#FFF',
    },
    post: {
        marginTop: 20,
        backgroundColor: '#F5F5F5',
    },
    postInfoContainer: {
        paddingHorizontal: 15,
        paddingVertical: 10,
    },
    postTitle: {
        color: '#4f4f4f',
        fontSize: 20,
        fontWeight: 'bold',
        // paddingTop: 10,
    },
    postDate: {
        color: '#4f4f4f',
        fontSize: 14,
    },
    postImage: {
        height: undefined,
        width: '100%',
        aspectRatio: 135 / 76,
        backgroundColor: '#000',
    },
    postTags: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingBottom: 10,
    },
    postTagsIcon: {
        fontSize: 30,
        color: '#4f4f4f',
    },
    postTagsText: {
        paddingLeft: 5,
        color: '#4f4f4f',
    },
    userImage: {
        height: undefined,
        width: '10%',
        aspectRatio: 1,
        borderRadius: 20,
        // resizeMode: "contain",
        // backgroundColor: '#365FB7',
    },
    postActionContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    postActionGroup: {
        padding: 10,
    },
    postActionBox: {
        backgroundColor: '#FFF',
        padding: 10,
        borderWidth: 0.6,
        borderColor: '#4f4f4f'
    },
    reportText: {
        color: '#4f4f4f',
        fontSize: 15,
        paddingLeft: 10,
    },
    reportIcon: {
        fontSize: 30,
        color: '#4f4f4f',
    },
    likeText: {
        color: '#4f4f4f',
        fontSize: 15,
        paddingRight: 10,
    },
    likeIcon: {
        fontSize: 30,
        color: '#4f4f4f',
    },
    postAuthor: {
        backgroundColor: '#4f4f4f',
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 20,
        paddingVertical: 10,
        // borderWidth: 0.6,
        // borderColor: '#4f4f4f',
    },
    postAuthorText: {
        paddingLeft: 5,
        color: '#FFF',
        fontSize: 16,
    },
    postBody:{
        backgroundColor: '#FFF',
        color: '#4f4f4f',
        padding: 20,
        borderLeftWidth: 0.6,
        borderRightWidth: 0.6,
        borderBottomWidth: 0.6,
        // textAlign: 'justify',
    },
    postCommentsContainer:{
        backgroundColor: '#FFF',
        color: '#4f4f4f',
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderLeftWidth: 0.6,
        borderRightWidth: 0.6,
        borderBottomWidth: 0.6,
    },
    postCommentsHeaderText:{
        color: '#FFF',
        backgroundColor: '#4f4f4f',
        fontWeight: 'bold',
        fontSize: 16,
        padding: 5,
    },
    postCommentsList:{
        paddingVertical: 10,
    },
});