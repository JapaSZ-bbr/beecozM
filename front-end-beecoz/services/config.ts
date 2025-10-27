import Constants from 'expo-constants'

type ExtraConfig = {
  apiUrl?: string
}

const FALLBACK_BASE_URL = 'http://192.168.144.1:8080'

export const getApiBaseUrl = (): string => {
  const envUrl = process.env.EXPO_PUBLIC_API_URL
  if (envUrl && envUrl.length > 0) {
    return envUrl
  }

  const expoConfigExtra = Constants.expoConfig?.extra as ExtraConfig | undefined
  if (expoConfigExtra?.apiUrl) {
    return expoConfigExtra.apiUrl
  }

  const manifestExtra = Constants.manifest?.extra as ExtraConfig | undefined
  if (manifestExtra?.apiUrl) {
    return manifestExtra.apiUrl
  }

  return FALLBACK_BASE_URL
}