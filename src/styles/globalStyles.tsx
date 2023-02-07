import { useTheme } from '@emotion/react';
import styled from '@emotion/styled/macro';
import { css, GlobalStyles } from '@mui/material';

export const AppGlobalStyles = () => {
  const theme = useTheme();

  return (
    <GlobalStyles
      styles={css`
        #root {
          padding: 10px;
          min-height: 100vh;
          background-color: ${theme.palette.bg.main};
        }

        *:focus-visible {
          outline: 2px solid ${theme.palette.primary.main};
          outline-offset: 4px;
        }
      `}
    />
  );
};

export const SectionContainer = styled.div`
  max-width: 980px;
  margin: 0 auto;
`
