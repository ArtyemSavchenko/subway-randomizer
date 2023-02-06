import { FC } from 'react';

import styled from '@emotion/styled/macro';

export const SandwichFillingLabel = styled.label`
  display: block;
  padding: 0.4em 1em;
  pointer-events: none;
`;

const InputCheckBox: FC<any> = (props) => <input type="checkbox" {...props} />;

export const SandwichFillingInput = styled(InputCheckBox)`
  appearance: none;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  border: 1px mediumseagreen solid;
  border-radius: 1em;
  cursor: pointer;
  z-index: -1;

  &:checked {
    background-color: mediumseagreen;
  }

  &:checked + ${SandwichFillingLabel} {
    color: #fff;
  }
`;

export const SandwichFillingContainer = styled.div`
  position: relative;
  z-index: 0;
`;
