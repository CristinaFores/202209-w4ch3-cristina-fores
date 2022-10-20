import "./index.css";
import React, { useEffect, useContext } from "react";
import Key from "./components/Key";

import numbers from "./data/numbers";
import PhoneContext from "./components/contexts/PhoneContext";

const App = (): JSX.Element => {
  const { loadNumbers } = useContext(PhoneContext);

  useEffect(() => {
    loadNumbers(numbers);
  }, [loadNumbers]);

  return (
    <>
      <div className="container">
        <Key numbersKey={numbers[8]} action={() => {}} />
        <span className="message">Calling...</span>
        <main className="phone">
          <div className="keyboard-container"></div>
          <div className="actions">
            <span className="number">667359961</span>
          </div>
        </main>
      </div>
    </>
  );
};

export default App;
