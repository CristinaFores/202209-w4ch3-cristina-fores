import Key from "../Key/Key";
import numbers from "../../data/numbers";
import { useContext } from "react";
import PhoneContext from "../contexts/PhoneContext";

const Keyboard = (): JSX.Element => {
  const { addNumber, deleteNumber } = useContext(PhoneContext);
  return (
    <div className="keyboard-container">
      <ol className="keyboard">
        {numbers.map((number) => (
          <Key
            key={number}
            numbersKey={number}
            action={() => {
              number === "delete" ? deleteNumber() : addNumber(number);
            }}
            className={`key ${number === "delete" ? "big" : ""}`}
          />
        ))}
      </ol>
    </div>
  );
};

export default Keyboard;
