import '@emotion/react'

declare module '@emotion/react' {
  export interface Theme {
    colors: {
      background: string
      body: string
      border: string
      highlight: string
      inputFocus: string
    }
  }
}
