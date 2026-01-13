/**
 * Design System Typography Tokens
 * Extracted from Figma design
 */

export const fontFamilies = {
  robotoFlex: "'Roboto Flex', sans-serif",
  sfProText: "'SF Pro Text', sans-serif",
} as const;

export const fontSizes = {
  // Mobile
  mobile: {
    h1: '20px',
    h2: '20px',
    bodyL: '18px',
    bodyM: '16px',
    bodyS: '12px',
    buttonM: '14px',
    buttonS: '12px',
    caption: '12px',
  },
  // Desktop
  desktop: {
    h1: '36px',
    h2: '24px',
    bodyL: '18px',
    bodyM: '16px',
    bodyS: '12px',
    subtitle2: '16px',
    caption: '12px',
  },
  // Buttons
  button: {
    l: '16px',
    m: '14px',
    s: '12px',
  },
} as const;

export const fontWeights = {
  regular: 400,
  medium: 500,
  semibold: 600,
  bold: 700,
} as const;

export const lineHeights = {
  // Mobile
  mobile: {
    h1: '24px',
    h2: '24px',
    bodyL: '24px',
    bodyM: '20px',
    bodyS: '16px',
    button: '16px',
    caption: '16px',
  },
  // Desktop
  desktop: {
    h1: '40px',
    h2: '24px',
    bodyL: '24px',
    bodyM: '20px',
    bodyS: '16px',
    subtitle2: '20px',
    caption: '16px',
  },
  // Buttons
  button: '16px',
} as const;

export const typography = {
  // Mobile Titles
  mobileH1: {
    fontFamily: fontFamilies.robotoFlex,
    fontSize: fontSizes.mobile.h1,
    fontWeight: fontWeights.semibold,
    lineHeight: lineHeights.mobile.h1,
    letterSpacing: 0,
  },
  mobileH2: {
    fontFamily: fontFamilies.robotoFlex,
    fontSize: fontSizes.mobile.h2,
    fontWeight: fontWeights.semibold,
    lineHeight: lineHeights.mobile.h2,
    letterSpacing: 0,
  },
  // Mobile Body
  mobileBodyL: {
    fontFamily: fontFamilies.robotoFlex,
    fontSize: fontSizes.mobile.bodyL,
    fontWeight: fontWeights.medium,
    lineHeight: lineHeights.mobile.bodyL,
    letterSpacing: 0,
  },
  mobileBodyM: {
    fontFamily: fontFamilies.robotoFlex,
    fontSize: fontSizes.mobile.bodyM,
    fontWeight: fontWeights.regular,
    lineHeight: lineHeights.mobile.bodyM,
    letterSpacing: 0,
  },
  mobileBodyS: {
    fontFamily: fontFamilies.robotoFlex,
    fontSize: fontSizes.mobile.bodyS,
    fontWeight: fontWeights.regular,
    lineHeight: lineHeights.mobile.bodyS,
    letterSpacing: 0,
  },
  // Mobile Buttons
  mobileButtonM: {
    fontFamily: fontFamilies.robotoFlex,
    fontSize: fontSizes.mobile.buttonM,
    fontWeight: fontWeights.bold,
    lineHeight: lineHeights.button,
    letterSpacing: 0,
  },
  mobileButtonS: {
    fontFamily: fontFamilies.robotoFlex,
    fontSize: fontSizes.mobile.buttonS,
    fontWeight: fontWeights.bold,
    lineHeight: lineHeights.button,
    letterSpacing: 0,
  },
  // Desktop
  desktopH1: {
    fontFamily: fontFamilies.robotoFlex,
    fontSize: fontSizes.desktop.h1,
    fontWeight: fontWeights.semibold,
    lineHeight: lineHeights.desktop.h1,
    letterSpacing: 0,
  },
  desktopSubtitle2: {
    fontFamily: fontFamilies.robotoFlex,
    fontSize: fontSizes.desktop.subtitle2,
    fontWeight: fontWeights.semibold,
    lineHeight: lineHeights.desktop.subtitle2,
    letterSpacing: 0,
  },
  desktopCaption: {
    fontFamily: fontFamilies.robotoFlex,
    fontSize: fontSizes.desktop.caption,
    fontWeight: fontWeights.regular,
    lineHeight: lineHeights.desktop.caption,
    letterSpacing: 0,
  },
} as const;
