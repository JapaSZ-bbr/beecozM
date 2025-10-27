import axios from 'axios'
import { getApiBaseUrl } from './config'

export const privateApi = axios.create({
  baseURL: 'http://192.168.144.1:8080',
})