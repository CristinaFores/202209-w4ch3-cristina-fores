import Key from "../Key/Key";
import numbers from "../../data/numbers";

const Keyboard = (): JSX.Element => {
  return (
    <div className="keyboard-container">
      <ol className="keyboard">
        {numbers.map((number) => (
          <Key
            numbersKey={number}
            action={() => {}}
            className={`key ${number === "delete" ? "big" : ""}`}
          />
        ))}
      </ol>
    </div>
  );
};

export default Keyboard;
