import { FC } from 'react';

import { IThemesNames } from 'styles/theme';

import { ThemeSwitcherButton } from './ThemeSwitcher.styles';

export interface IThemeSwitcher {
  currentTheme: IThemesNames;
  switchTheme: () => void;
}

const ThemeSwitcher: FC<IThemeSwitcher> = ({ currentTheme, switchTheme }) => {
  return (
    <ThemeSwitcherButton onClick={switchTheme}>
      {currentTheme === 'dark' ? 'Светлая тема' : 'Темная тема'}
    </ThemeSwitcherButton>
  );
};

export default ThemeSwitcher;
