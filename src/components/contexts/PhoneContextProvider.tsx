import { useState, useCallback } from "react";
import PhoneContext from "./PhoneContext";

interface PhoneContextProviderProps {
  children: JSX.Element | JSX.Element[];
}

const PhoneContextProvider = ({
  children,
}: PhoneContextProviderProps): JSX.Element => {
  const [numbers, setNumbers] = useState<number[]>([]);

  const [isCalling, setIsCalling] = useState<boolean>(false);

  const loadNumbers = useCallback((numbers: number[]) => {
    setNumbers([...numbers]);
  }, []);

  const addNumber = (number: number) => {
    if (numbers.length >= 9) return;

    setNumbers([...numbers, number]);
  };

  const callingState = (callingState: boolean) => {
    setIsCalling(callingState);
  };

  return (
    <PhoneContext.Provider
      value={{
        numbers,
        isCalling,
        addNumber,
        callingState,
        loadNumbers,
      }}
    >
      {children}
    </PhoneContext.Provider>
  );
};

export default PhoneContextProvider;