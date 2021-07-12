import styled from 'styled-components/native';

export const Post = styled.View`
    border-bottom-width: 1px;
    background-color: #F5F5F5;
`

export const PostHeader = styled.View`
    padding-left: 15;
    padding-right: 15;
    padding-top: 10;
    padding-bottom: 10;
`
export const PostTitle = styled.Text`
    color: #4f4f4f;
    font-size: 18;
    font-weight: bold;
`
export const PostDate = styled.Text`
    color: #4f4f4f;
    font-size: 14;
`

export const PostFooter = styled.View`
    flex-direction: row;
    align-items: center;
    padding-left: 15;
    padding-right: 15;
    padding-top: 10;
    padding-bottom: 10;
`

export const PostTagsText = styled.Text`
    padding-left: 10;
    color: #4f4f4f;
`