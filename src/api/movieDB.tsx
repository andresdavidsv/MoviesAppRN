import axios from 'axios';
import Config from 'react-native-config';

const movieDB = axios.create({
  baseURL: Config.API_URL,
  params: {
    api_key: Config.API_KEY,
    language: 'es-ES',
  },
});

export default movieDB;
