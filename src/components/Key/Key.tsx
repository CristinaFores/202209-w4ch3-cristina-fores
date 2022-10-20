interface KeyProps {
  numbersKey: string;
  className: string;
  action: () => void;
}

const Key = ({ numbersKey, action, className }: KeyProps): JSX.Element => {
  return (
    <li>
      <button
        type="button"
        className={className}
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
