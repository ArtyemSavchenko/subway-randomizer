import { FC, InputHTMLAttributes } from 'react';

import styled from '@emotion/styled/macro';

export const SandwichFillingLabel = styled.label`
  display: block;
  padding: 0.4em 1em;
  pointer-events: none;
  color: ${(props) => props.theme.palette.txt.main};
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
  border: 1px solid ${(props) => props.theme.palette.primary.main};
  border-radius: 1em;
  cursor: pointer;
  z-index: -1;

  &:checked {
    background-color: ${(props) => props.theme.palette.primary.main};
  }

  &:checked + ${SandwichFillingLabel} {
    color: ${(props) => props.theme.palette.txt.alternation};
  }
`;

export const SandwichFillingContainer = styled.div`
  position: relative;
  z-index: 0;
`;
