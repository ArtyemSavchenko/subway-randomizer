import { FC, InputHTMLAttributes } from 'react';

import styled from '@emotion/styled/macro';

export const SandwichCardContainer = styled.div`
  position: relative;
  z-index: 0;
  padding: 0.5em 1em;
  min-height: 90px;
`;

const InputCB: FC<InputHTMLAttributes<HTMLInputElement>> = (props) => (
  <input type="checkbox" {...props} />
);

export const SandwichCardLabel = styled.label`
  pointer-events: none;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const SandwichCardHeading = styled.h2`
  color: inherit;
  font-size: 20px;
`;

export const SandwichCardPrice = styled.p`
  font-size: 16px;
`;

export const SandwichCardCB = styled(InputCB)`
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

  & + ${SandwichCardLabel} {
    color: ${(props) => props.theme.palette.text.primary.main};
  }
  &:checked + ${SandwichCardLabel} {
    color: ${(props) => props.theme.palette.text.alternation.main};
  }
`;
