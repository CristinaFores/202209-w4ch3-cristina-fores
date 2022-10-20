import { useContext } from "react";
import PhoneContext from "../contexts/PhoneContext";

const Actions = (): JSX.Element => {
  const { isCalling, setIsCalling, numbers } = useContext(PhoneContext);

  return (
    <>
      <a
        href="button"
        onClick={(event) => {
          if (numbers.length === 9) setIsCalling(true);
          event.preventDefault();
        }}
        className={`call ${!isCalling ? "active" : ""}`}
      >
        Call
      </a>

      <a
        href="button"
        onClick={(event) => {
          setIsCalling(false);
          event.preventDefault();
        }}
        className={`hang ${isCalling ? "active" : ""}`}
      >
        Hang
      </a>
    </>
  );
};

export default Actions;
