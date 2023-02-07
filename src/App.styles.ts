import styled from '@emotion/styled/macro';

import { SectionContainer } from 'styles/globalStyles';

export const SandwichCardContainer = styled(SectionContainer)`
  display: grid;
  grid-template-columns:  repeat(auto-fit, minmax(200px, auto));
  gap: 10px;
`;
