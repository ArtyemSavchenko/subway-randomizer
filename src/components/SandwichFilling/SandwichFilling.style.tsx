import { FC, InputHTMLAttributes } from 'react';

import styled from '@emotion/styled/macro';

export const SandwichFillingLabel = styled.label`
  display: block;
  padding: 0.4em 1em;
  pointer-events: none;
  color: ${(props) => props.theme.palette.text.primary.main};
`;

const InputCheckBox: FC<InputHTMLAttributes<HTMLInputElement>> = (props) => (
  <input type="checkbox" {...props} />
);

export const SandwichFillingInput = styled(InputCheckBox)`
  appearance: none;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  transition: box-shadow 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  border-radius: 1em;
  cursor: pointer;
  background-color: ${(props) => props.theme.palette.bg.light};
  z-index: -1;

  &:checked {
    background-color: ${(props) => props.theme.palette.primary.main};
  }

  &:checked + ${SandwichFillingLabel} {
    color: ${(props) => props.theme.palette.text.alternation.main};
  }
`;

export const SandwichFillingContainer = styled.div`
  position: relative;
  z-index: 0;
`;
