declare module '@emotion/react' {
  interface Theme extends IThemeObject {}
}
declare module '@mui/material/styles' {
  interface ThemeOptions extends IThemeObject {}
}

export type IThemesNames = 'dark' | 'light';
export type IThemeObject = typeof LIGHT_THEME;

export const LIGHT_THEME = {
  palette: {
    primary: {
      main: 'hsl(147, 50%, 47%)',
    },
    txt: {
      main: '#333',
      alternation: '#fff',
    },
    bg: '#fff',
  },
};

export const DARK_THEME = {
  palette: {
    primary: {
      main: 'hsl(147, 50%, 47%)',
    },
    txt: {
      main: '#fff',
      alternation: '#fff',
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
