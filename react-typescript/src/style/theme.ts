export interface ThemeInterface {
  colors: { [key in keyof typeof colors]: string }
  breakpoints: { [key in keyof typeof breakpoints]: string }
}

const colors = {
  primary: '#1b1a20',
  secondary: '#eabf00',
  general: '#034515',
}

const breakpoints = {
  desktop: '1025px',
  tablet: '768px',
  mobile: '480px',
}

const theme: ThemeInterface = { colors, breakpoints }

export { theme }
