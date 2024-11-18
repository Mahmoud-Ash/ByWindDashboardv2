import { ReactNode, useState } from "react";
import { TabContext } from "./useActiveTab";

const TabsProvider = ({ children }: { children: ReactNode }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <TabContext.Provider value={{ activeIndex, setActiveIndex }}>
      {children}
    </TabContext.Provider>
  );
};

export default TabsProvider;
