import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import base64 from 'react-native-base64';

const API_URL = 'studiumapp.herokuapp.com/';

const baseURL = (username, password) => {
  const hasUsernameAndPassword =
    username !== null &&
    username !== undefined &&
    password !== null &&
    password !== undefined;

  if (hasUsernameAndPassword) {
    console.log('https://' + username + ':' + password + '@' + API_URL);
    return 'https://' + username + ':' + password + '@' + API_URL;
  }

  console.log('https://' + API_URL);
  return 'https://' + API_URL;
};

export const loggedAxios = async () => {
  const username = await AsyncStorage.getItem('username');
  const password = await AsyncStorage.getItem('password');
  const authHeader = 'Basic ' + base64.encode(`${username}:${password}`);
  return axios.create({
    baseURL: baseURL(username, password),
    timeout: 15000,
    headers: { Authorization: authHeader },
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
