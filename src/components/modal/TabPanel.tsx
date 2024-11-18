import { ReactNode } from "react";
import { useActiveTab } from "../../contexts/tabContext/useActiveTab";

type TabPanelProps = {
  index: number;
  children: ReactNode;
};
const TabPanel = ({ index, children }: TabPanelProps) => {
  const { activeIndex } = useActiveTab();
  return (
    <section
      className={activeIndex !== index ? "hidden" : "flex-1 flex flex-col"}
    >
      {children}
    </section>
  );
};

export default TabPanel;
