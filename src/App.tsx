import "./index.css";
import React, { useEffect, useContext } from "react";

import numbers from "./data/numbers";
import PhoneContext from "./components/contexts/PhoneContext";
import Keyboard from "./components/Keyboard/Keyboard";

const App = (): JSX.Element => {
  const { loadNumbers } = useContext(PhoneContext);

  useEffect(() => {
    loadNumbers(numbers);
  }, [loadNumbers]);

  return (
    <>
      <div className="container">
        <span className="message">Calling...</span>
        <main className="phone">
          <div className="keyboard-container">
            <Keyboard />
          </div>
          <div className="actions">
            <span className="number">667359961</span>
          </div>
        </main>
      </div>
    </>
  );
};

export default App;
