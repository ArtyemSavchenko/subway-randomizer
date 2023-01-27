import { useReducer, useEffect } from 'react';

import { reducer, init } from 'store/reducer';
import { AppDispatch } from 'contexts/AppDispatch';

import SandwichOption from 'components/SandwichOption/SandwichOption';
import SandwichCard from 'components/SandwichCard/SandwichCard';
import { getRandomEl, getRandomEls } from 'utils/randomizer';
import { ISandwich, ISandwichOption } from 'types/sandwich';
import { copyDeep } from 'utils/utils';
import { getRandomSandwich } from 'App.utils';

const App = () => {
  const [{ sandwiches, sandwichOptions }, dispatch] = useReducer(
    reducer,
    init()
  );

  const saveConfig = () => {
    localStorage.setItem(
      'settings',
      JSON.stringify({ sandwiches, sandwichOptions })
    );
  };

  useEffect(() => {
    saveConfig();
  }, [sandwiches, sandwichOptions]);

  return (
    <AppDispatch.Provider value={dispatch}>
      <button onClick={() => getRandomSandwich(sandwiches, sandwichOptions)}>
        GENERATE
      </button>
      {sandwiches.map((sandwich) => {
        return (
          <SandwichCard
            key={sandwich.name}
            name={sandwich.name}
            description={sandwich.description}
            price={sandwich.price}
            badge={sandwich.badge}
            isChecked={sandwich.isChecked}
          />
        );
      })}

      {sandwichOptions.map((option) => (
        <SandwichOption key={option.optionName} option={option} />
      ))}

      <button type="button">Сгенерировать</button>
    </AppDispatch.Provider>
  );
};

export default App;
