import axios from 'axios'

import config from '../config'

function createAxiosInstance() {
  if (!config.api.baseUrl) {
    throw new Error('API_BASE_URL no configuration found!')
  }

  const instance = axios.create({
    baseURL: config.api.baseUrl,
  })

  // Customize request config options or interceptor here

  return instance
}

const httpClient = createAxiosInstance()

export default httpClient
