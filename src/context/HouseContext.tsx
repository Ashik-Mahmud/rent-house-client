import { createContext } from "react";

type Props = {
  children: React.ReactNode;
  value: any;
};

export const HouseContextApi = createContext({});
const HouseContext = ({ children, value }: Props) => {
  return (
    <HouseContextApi.Provider
      value={{
        reviewsCount: value?.reviewsCount,
        questionsCount: value?.reviewsCount,
        reportsCount: value?.reportsCount,
      }}
    >
      {children}
    </HouseContextApi.Provider>
  );
};

export default HouseContext;
