import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const baseURL = (username, password) => {
  const _baseUrl =
    username === null ||
    password === null ||
    username === undefined ||
    password === undefined
      ? 'https://studiumapp.herokuapp.com/'
      : 'https://' + username + ':' + password + '@studiumapp.herokuapp.com/';
  console.log('baseUrl = ' + _baseUrl);
  return _baseUrl;
};

export const loggedAxios = async () => {
  const username = await AsyncStorage.getItem('username');
  const password = await AsyncStorage.getItem('password');
  return axios.create({
    baseURL: baseURL(username, password),
    timeout: 15000,
  });
};

export const basicAxios = () => {
  return axios.create({
    baseURL: baseURL(),
    timeout: 15000,
  });
};

export const customAxios = (username, password) => {
  return axios.create({
    baseURL: baseURL(username, password),
    timeout: 15000,
  });
};
