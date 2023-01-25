import { useReducer, useEffect } from "react";

import {
  reducer,
  switchIsCheckedOption,
  switchIsCheckedSandwich,
} from "store/reducer";
import { ISandwichOption } from "types/sandwich";

import SandwichCard from "components/SandwichCard";
import SandwichOption from "components/SandwichOption";

import {
  getCheckedEls,
  getInitialSettingsState,
  saveInitialSettingsState,
} from "App.utils";
import { getRandomEl, getRandomSubarray } from "utils/randomizer";

const App = () => {
  const [{ sandwiches, sandwichOptions }, dispatch] = useReducer(
    reducer,
    getInitialSettingsState()
  );

  useEffect(() => {
    saveInitialSettingsState({ sandwiches, sandwichOptions });
  }, [sandwiches, sandwichOptions]);

  const generateSandwich = () => {
    const names = sandwiches.filter((el) => el.isChecked);
    const nameOfResultSandwich = getRandomEl(names).name;

    const options = sandwichOptions.reduce((prev, option) => {
      const newOption = {
        name: option.name,
        values: [] as ISandwichOption["values"],
      };
      const optionsArray = getCheckedEls(option.values);

      if (option.maxCount === 1) {
        newOption.values.push(getRandomEl(optionsArray));
      } else {
        //TODO вместо 3 подставить needed options
        newOption.values.push(...getRandomSubarray(optionsArray, 3));
      }

      return [...prev, newOption];
    }, [] as any);

    return { name: nameOfResultSandwich, options };
  };

  return (
    <main>
      <div style={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}>
        {sandwiches.map((sandwich) => (
          <SandwichCard
            key={sandwich.name}
            {...sandwich}
            onClick={() => dispatch(switchIsCheckedSandwich(sandwich.name))}
          />
        ))}
      </div>
      {sandwichOptions.map((option) => (
        <SandwichOption
          key={option.name}
          {...option}
          neededCount={option.maxCount}
          switchOption={(name: string, valueName: string) =>
            dispatch(switchIsCheckedOption(name, valueName))
          }
        />
      ))}

      <button
        onClick={() => {
          console.dir(generateSandwich());
        }}
      >
        Сгенерировать
      </button>
      {/* <p>{newSandwich}</p> */}
    </main>
  );
};
export default App;
