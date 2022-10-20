import { createContext } from "react";

interface PhoneDataContextStructure {
  numbers: number[];
  isCalling: boolean;
  addNumber: (number: number) => void;
  callingState: (callingState: boolean) => void;
  loadNumbers: (numbers: number[]) => void;
}

const PhoneContext = createContext<PhoneDataContextStructure>(
  {} as PhoneDataContextStructure
);

export default PhoneContext;
