import Key from "../Key/Key";
import numbers from "../../data/numbers";

const Keyboard = (): JSX.Element => {
  return (
    <div className="keyboard-container">
      <ol className="keyboard">
        {numbers.map((number) => (
          <Key numbersKey={number} action={() => {}} />
        ))}
        <li>
          <button className="delete key big">Delete</button>
        </li>
      </ol>
    </div>
  );
};

export default Keyboard;
