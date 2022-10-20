import { useContext } from "react";
import PhoneContext from "../contexts/PhoneContext";

const Display = (): JSX.Element => {
  const { numbers } = useContext(PhoneContext);
  return (
    <span className="number">
      {numbers.map((number) => {
        return number;
      })}
    </span>
  );
};

export default Display;
