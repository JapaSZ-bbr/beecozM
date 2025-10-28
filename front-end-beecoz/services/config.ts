import Constants from 'expo-constants'
import { Platform } from 'react-native'

type ExtraConfig = { apiUrl?: string }

const PORT = Number(process.env.EXPO_PUBLIC_API_PORT ?? 8080)
const FALLBACK_HOST = '192.168.18.9' // IPv4 local atual

function pickHostFromExpo(): string | null {
  const hostUri =
    (Constants as any).manifest?.debuggerHost ||
    (Constants.expoConfig as any)?.hostUri ||
    (Constants as any).manifest2?.extra?.expoGo?.debuggerHost ||
    ''
  if (!hostUri) return null
  const host = String(hostUri).split(':')[0] // 
  if (Platform.OS === 'android' && (host === 'localhost' || host.startsWith('127.'))) {
    return '10.0.2.2' // emulador Android (AVD)
  }
  return host
}

export const getApiBaseUrl = (): string => {
  const envUrl = process.env.EXPO_PUBLIC_API_URL
  if (envUrl && envUrl.length > 0) return envUrl

  const extra =
    (Constants.expoConfig?.extra as ExtraConfig | undefined) ??
    (Constants.manifest?.extra as ExtraConfig | undefined)
  if (extra?.apiUrl) return extra.apiUrl

  const host = pickHostFromExpo()
  if (host) return `http://${host}:${PORT}`

  return `http://${FALLBACK_HOST}:${PORT}`
}
