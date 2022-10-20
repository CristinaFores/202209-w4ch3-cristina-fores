import { createContext } from "react";

export interface PhoneDataContextStructure {
  numbers: string[];
  isCalling: boolean;
  addNumber: (number: string) => void;
  setIsCalling: (callingState: boolean) => void;
  deleteNumber: () => void;
}

const PhoneContext = createContext<PhoneDataContextStructure>(
  {} as PhoneDataContextStructure
);

export default PhoneContext;
