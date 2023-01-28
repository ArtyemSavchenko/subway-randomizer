import { useReducer, useEffect, useState } from 'react';

import { reducer, init } from 'store/reducer';
import { AppDispatch } from 'contexts/AppDispatch';

import SandwichOption from 'components/SandwichOption/SandwichOption';
import SandwichCard from 'components/SandwichCard/SandwichCard';
import { getRandomSandwich } from 'App.utils';

const App = () => {
  const [{ sandwiches, sandwichOptions }, dispatch] = useReducer(
    reducer,
    init()
  );

  const [generatedSandwich, setGeneratedSandwich] = useState('');

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
      <div style={{maxWidth: 900, margin: '0 auto'}}>
        <div style={{ display: 'flex', flexWrap: 'wrap' }}>
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
        </div>

        {sandwichOptions.map((option) => (
          <SandwichOption key={option.optionName} option={option} />
        ))}

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
      </div>
    </AppDispatch.Provider>
  );
};

export default App;
