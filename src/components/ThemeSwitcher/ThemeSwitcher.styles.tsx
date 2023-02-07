import styled from '@emotion/styled/macro';
import { mediaHover } from 'utils/styles';

export const ThemeSwitcherButton = styled.button`
  background-color: transparent;
  color: ${({ theme }) => theme.palette.txt.main};
  text-decoration: underline dotted;
  border-radius: 1em;

  ${mediaHover} {
    &:hover {
      color: ${({ theme }) => theme.palette.secondary.main};
    }
  }
`;
