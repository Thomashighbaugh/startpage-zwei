import { Interpolation, Theme } from '@emotion/react'

export const globalStyles = (theme: Theme): Interpolation<Theme> => ({
  '*': {
    padding: 0,
    margin: 0,
    outline: 0
  },
  body: {
    fontSize: '12px',
    lineHeight: '28px',
    background: theme.colors.background,
    color: theme.colors.body
  },
  'h1, h2, h3, h4, h5': {
    marginBottom: '1em'
  },
  hr: {
    borderColor: theme.colors.border
  },
  label: {
    display: 'block',
    fontWeight: 700
  },
  'input, select': {
    width: 'calc(100% - 1.5em)',
    background: theme.colors.border,
    color: theme.colors.body,
    border: 'none',
    borderBottom: `2px solid ${theme.colors.border}`,
    appearance: 'none',
    WebkitAppearance: 'none',
    boxShadow: 'none',
    padding: '10px 4px',
    fontSize: '18px',
    lineHeight: '28px',
    outline: 'none',
    borderRadius: 0
  },
  'input[type="search"]': {
    width: '100%'
  },
  'input, select, button': {
    borderRadius: '4px'
  },
  'input:focus, select:focus': {
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
    borderBottom: `2px solid ${theme.colors.inputFocus}`
  },
  'a, a:visited': {
    color: theme.colors.body,
    textDecoration: 'none'
  }
})

export default (isDark: boolean | undefined): Theme => {
  if (isDark) {
    return {
      colors: {
        background: '#22262d',
        body: '#8b9cbe',
        border: '#3c3f4c',
        highlight: '#f4f4f7',
        inputFocus: '#b2bfd9'
      }
    }
  }

  return {
    colors: {
      background: '#f4f4f7',
      body: '#22262d',
      border: '#b2bfd9',
      highlight: '#8b9cbe',
      inputFocus: '#555e70'
    }
  }
}
