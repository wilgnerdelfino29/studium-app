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
    logoffButton: {
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



    postHeader: {
        paddingHorizontal: 15,
        paddingTop: 10,
        paddingBottom: 10,
        // flexDirection: 'row',
        // justifyContent: 'space-evenly',
    },
    postTitle: {
        color: '#4f4f4f',
        fontSize: 20,
        fontWeight: 'bold',
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



    postFooter: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 10,
        paddingHorizontal: 15,
    },
    postTagsIcon: {
        fontSize: 30,
        color: '#4f4f4f',
    },
    postTagsText: {
        paddingLeft: 10,
        color: '#4f4f4f',
    },

});