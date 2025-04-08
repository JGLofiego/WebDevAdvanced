import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    buttonColor: string
    menuItemColor: string
    primaryBgColor: string
    primaryFontColor: string
    primaryIconTitleColor: string
    secondaryBgColor: string
    secondaryFontColor: string
    secondaryIconTitleColor: string
  }
}
