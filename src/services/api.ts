import axios from 'axios';

export const apiClient = axios.create({
  baseURL: 'https://app.professordaniloalves.com.br/api/v1/',
}) 