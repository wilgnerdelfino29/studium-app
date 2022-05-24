import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const API_URL = 'studiumapp.herokuapp.com/';

const baseURL = (username, password) => {
  const hasUsernameAndPassword =
    username !== null &&
    username !== undefined &&
    password !== null &&
    password !== undefined;

  if (hasUsernameAndPassword) {
    return 'https://' + username + ':' + password + '@' + API_URL;
  }

  return 'https://' + API_URL;
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
