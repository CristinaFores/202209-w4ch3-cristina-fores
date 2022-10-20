interface KeyProps {
  numbersKey: number;
  action: () => void;
}

const Key = ({ numbersKey, action }: KeyProps): JSX.Element => {
  return (
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
  );
};

export default Key;
