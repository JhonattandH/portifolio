import 'styled-components'

export interface Theme {
  corPrincipal: string
  corSecundaria: string
  corDeFundo: string
  corDeFundoBotao: string
  corDaBorda: string
}

declare module 'styled-components' {
  export interface DefaultTheme extends Theme {}
}
