import React, { createContext } from 'react';

import { IAction } from 'store/reducer.types';

export const AppDispatch = createContext<React.Dispatch<IAction>>(() => {});
