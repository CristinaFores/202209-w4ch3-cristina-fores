interface KeyProps {
  numbersKey: number;
  action: () => void;
}

const Key = ({ numbersKey, action }: KeyProps): JSX.Element => {
  return (
    <ol>
      <li>
        <button className="delete key">Delete</button>
      </li>
      <li>
        <button
          type="button"
          className={"key"}
          onClick={(event) => {
            event.preventDefault();
            action();
          }}
        >
          {numbersKey}
        </button>
      </li>
    </ol>
  );
};

export default Key;
