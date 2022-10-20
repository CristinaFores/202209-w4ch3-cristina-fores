import { useContext } from "react";
import PhoneContext from "../contexts/PhoneContext";

const ActionCalling = (): JSX.Element => {
  const { isCalling } = useContext(PhoneContext);

  return <>{isCalling ? <span className="message">Calling...</span> : ""}</>;
};

export default ActionCalling;
