import * as styledComponents from 'styled-components/native'
import {theme} from './theme'

const {default: styled, css, ThemeProvider} = styledComponents as styledComponents.ReactNativeThemedStyledComponentsModule<typeof theme>

export {css, ThemeProvider}
export default styled