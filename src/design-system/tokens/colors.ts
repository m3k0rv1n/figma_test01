/**
 * Design System Color Tokens
 * Extracted from Figma design
 */
export const colors = {
  // System Colors
  white: '#FFFFFF',
  black: '#212121',
  yellow: {
    500: '#FFCD17',
  },
  
  // Dark Theme Colors
  dark: {
    bg01: '#15141F',
    bg04: '#2A293E',
    bg05: '#232233',
    bg06: '#06040F',
  },
  
  // Night Colors (with alpha)
  night: {
    grayAlpha100: 'rgba(255, 255, 255, 0.11)',
    grayAlpha200: 'rgba(255, 255, 255, 0.19)',
    grayAlpha300: 'rgba(255, 255, 255, 0.25)',
    grayAlpha500: 'rgba(255, 255, 255, 0.49)',
    grayAlpha600: 'rgba(255, 255, 255, 0.59)',
    grayAlpha900: 'rgba(255, 255, 255, 0.94)',
  },
  
  // Light Colors
  light: {
    gray500: '#909090',
    gray900: '#212121',
  },
  
  // Background
  lobbyBg: '#12111A',
  
  // Accent Colors
  accent: {
    purple: {
      from: 'rgb(160, 85, 255)',
      mid: 'rgb(133, 38, 255)',
      to: 'rgb(75, 48, 244)',
    },
  },
  
  // Button Colors
  button: {
    demo: '#4B3A6E',
  },
  
  // Gradient
  gradient: {
    primary: 'linear-gradient(192.864deg, rgb(160, 85, 255) 0%, rgb(133, 38, 255) 26.522%, rgb(75, 48, 244) 100%)',
    banner: 'linear-gradient(194.49deg, rgb(160, 85, 255) 0%, rgb(133, 38, 255) 26.522%, rgb(75, 48, 244) 100%)',
  },
} as const;
