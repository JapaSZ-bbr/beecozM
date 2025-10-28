import axios from 'axios'
import { getApiBaseUrl } from './config'

export const api = axios.create({
  baseURL: getApiBaseUrl(),
  timeout: 10000,
})

api.interceptors.response.use(
  (res) => res,
  (err) => {
    const status = err.response?.status ?? 'NETWORK'
    const data = err.response?.data ?? err.message
    console.log('AXIOS ERROR ->', status, data)
    return Promise.reject(err)
  }
)
