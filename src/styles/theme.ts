declare module '@emotion/react' {
  interface Theme extends IThemeObject {}
}
declare module '@mui/material/styles' {
  interface ThemeOptions extends IThemeObject {}
}

export type IThemesNames = 'dark' | 'light';
export type IThemeObject = typeof LIGHT_THEME;

const COMMON_THEME = {
  palette: {
    primary: {
      main: 'hsl(147, 50%, 47%)',
    },
    secondary: {
      main: 'hsl(207, 90%, 50%)',
    },
  },
}

export const LIGHT_THEME = {
  palette: {
    ...COMMON_THEME.palette,
    txt: {
      main: 'hsl(0, 0%, 20%)',
      alternation: 'hsl(0, 0%, 100%)',
      light: 'hsl(0, 0%, 25%)',
    },
    bg: '#fff',
  },
};

export const DARK_THEME = {
  palette: {
    ...COMMON_THEME.palette,
    txt: {
      main: 'hsl(0, 0%, 100%)',
      alternation: 'hsl(0, 0%, 100%)',
      light: 'hsl(0, 0%, 80%)',
    },
    bg: '#333',
  },
};

export const getTheme = (themeName: IThemesNames) => {
  switch (themeName) {
    case 'light':
      return LIGHT_THEME;

    case 'dark':
      return DARK_THEME;
  }
};
