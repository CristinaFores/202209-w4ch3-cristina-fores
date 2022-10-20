import { useState } from "react";
import PhoneContext from "./PhoneContext";

interface PhoneContextProviderProps {
  children: JSX.Element | JSX.Element[];
}

const PhoneContextProvider = ({
  children,
}: PhoneContextProviderProps): JSX.Element => {
  const [numbers, setNumbers] = useState<string[]>([]);

  const [isCalling, setIsCalling] = useState<boolean>(false);

  const addNumber = (number: string) => {
    if (numbers.length >= 9) return;

    setNumbers([...numbers, number]);
  };

  const deleteNumber = () => {
    const newNumber = [...numbers];
    newNumber.pop();
    setNumbers(newNumber);
  };

  return (
    <PhoneContext.Provider
      value={{
        numbers,
        isCalling,
        addNumber,
        setIsCalling,
        deleteNumber,
      }}
    >
      {children}
    </PhoneContext.Provider>
  );
};

export default PhoneContextProvider;
