import { PhoneDataContextStructure } from "../components/contexts/PhoneContext";

const mockPhoneContext: PhoneDataContextStructure = {
  addNumber: jest.fn(),
  deleteNumber: jest.fn(),
  setIsCalling: jest.fn(),
  numbers: ["6", "4", "5", "0"],
  isCalling: true,
};

export default mockPhoneContext;
