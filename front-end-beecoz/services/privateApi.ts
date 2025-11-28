import axios from 'axios'
import { getApiBaseUrl } from './config'

export const privateApi = axios.create({
  baseURL: getApiBaseUrl(),
})