import { createContext } from "react";

interface PhoneDataContextStructure {
  numbers: string[];
  isCalling: boolean;
  addNumber: (number: string) => void;
  callingState: (callingState: boolean) => void;
  loadNumbers: (numbers: string[]) => void;
}

const PhoneContext = createContext<PhoneDataContextStructure>(
  {} as PhoneDataContextStructure
);

export default PhoneContext;
