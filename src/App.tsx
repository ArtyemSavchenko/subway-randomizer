import { useReducer, useEffect, useState, useLayoutEffect } from 'react';
import { ThemeProvider } from '@mui/material/styles';

import { reducer, init } from 'store/reducer';
import { AppDispatch } from 'contexts/AppDispatch';
import { getTheme, IThemeObject, IThemesNames } from 'styles/theme';

import SandwichOption from 'components/SandwichOption/SandwichOption';
import SandwichCard from 'components/SandwichCard/SandwichCard';
import ThemeSwitcher from 'components/ThemeSwitcher/ThemeSwitcher';

import { getRandomSandwich } from 'App.utils';
import { SandwichCardContainer } from 'App.styles';
import { AppGlobalStyles, SectionContainer } from 'styles/globalStyles';

const App = () => {
  const [themeName, setThemeName] = useState<IThemesNames>('light');
  const [themeObject, setThemeObject] = useState<IThemeObject>(
    getTheme('light')
  );

  const [generatedSandwich, setGeneratedSandwich] = useState('');
  const [{ sandwiches, sandwichOptions }, dispatch] = useReducer(
    reducer,
    init()
  );

  const switchTheme = () => {
    if (themeName === 'dark') {
      setThemeName('light');
      localStorage.setItem('theme', 'light');
    } else {
      setThemeName('dark');
      localStorage.setItem('theme', 'dark');
    }
  };

  const saveConfig = () => {
    localStorage.setItem(
      'settings',
      JSON.stringify({ sandwiches, sandwichOptions })
    );
  };

  useEffect(() => {
    saveConfig();
  }, [sandwiches, sandwichOptions]);

  useLayoutEffect(() => {
    const savedTheme = localStorage.getItem('theme') as IThemesNames;

    if (savedTheme) {
      return setThemeName(savedTheme);
    }

    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setThemeName('dark');
    } else {
      setThemeName('light');
    }
  }, []);

  useEffect(() => {
    setThemeObject(getTheme(themeName));
  }, [themeName]);

  return (
    <AppDispatch.Provider value={dispatch}>
      <ThemeProvider theme={themeObject}>
        <AppGlobalStyles />

        <ThemeSwitcher currentTheme={themeName} switchTheme={switchTheme} />

        <SandwichCardContainer>
          {sandwiches.map((sandwich) => {
            return <SandwichCard key={sandwich.name} {...sandwich} />;
          })}
        </SandwichCardContainer>

        <SectionContainer>
          {sandwichOptions.map((option) => (
            <SandwichOption key={option.optionName} option={option} />
          ))}
        </SectionContainer>

        <div style={{ display: 'grid', placeContent: 'center' }}>
          <button
            style={{
              padding: '1em 2em',
              borderRadius: '2em',
              backgroundColor: 'tomato',
              color: '#fff',
              justifySelf: 'center',
              margin: '2em',
            }}
            onClick={() =>
              setGeneratedSandwich(
                getRandomSandwich(sandwiches, sandwichOptions)
              )
            }
          >
            GENERATE
          </button>

          <p
            style={{
              maxWidth: 768,
              minHeight: 70,
            }}
          >
            {generatedSandwich}
          </p>
        </div>
      </ThemeProvider>
    </AppDispatch.Provider>
  );
};

export default App;
