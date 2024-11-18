import {
  createContext,
  Dispatch,
  SetStateAction,
  useContext,
} from "react";

type TabContextProps = {
  activeIndex: number;
  setActiveIndex: Dispatch<SetStateAction<number>>;
};

export const TabContext = createContext<TabContextProps | undefined>(undefined);

export const useActiveTab = () => {
  const context = useContext(TabContext);
  if (!context) {
    throw new Error("useActiveTab must be used within a TabContextProvider");
  }
  return context;
};

