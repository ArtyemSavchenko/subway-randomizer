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
    secondary: {
      main: 'hsl(207, 90%, 50%)',
    },
    text: {
      primary: {
        main: 'hsl(0, 0%, 20%)',
        light: 'hsl(0, 0%, 25%)',
      },
      alternation: { main: 'hsl(0, 0%, 100%)' },
    },
    bg: {
      main: 'hsl(0, 100%, 100%)',
      light: 'hsl(0, 100%, 100%)',
    },
  },
};

export const DARK_THEME = {
  palette: {
    primary: {
      main: 'hsl(147, 50%, 47%)',
    },
    secondary: {
      main: 'hsl(207, 90%, 50%)',
    },
    text: {
      primary: {
        main: 'hsl(0, 0%, 100%)',
        light: 'hsl(0, 0%, 80%)',
      },
      alternation: { main: 'hsl(0, 0%, 100%)' },
    },
    bg: {
      main: 'hsl(0, 0%, 13%)',
      light: 'hsl(0, 0%, 20%)',
    },
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
