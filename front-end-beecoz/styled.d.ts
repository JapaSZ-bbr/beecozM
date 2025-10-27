import 'styled-components'

declare module 'styled-components' {
    export interface DefaultTheme {
        colors: {
            background: string,
            main: string,
            second: string,
            gray_100: string,
            white: string,
            yellow_p: string,
            blue_p: string,
        }
    }
}