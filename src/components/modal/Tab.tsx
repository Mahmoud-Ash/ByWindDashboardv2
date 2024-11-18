import { ReactNode } from "react";
import { twMerge } from "tailwind-merge";
import { useActiveTab } from "../../contexts/tabContext/useActiveTab";

type TabProps = {
  index: number;
  children: ReactNode;
};

export const Tab = ({ index, children }: TabProps) => {
  const { activeIndex, setActiveIndex } = useActiveTab();

  return (
    <li
      onClick={() => setActiveIndex(index)}
      className={twMerge(
        "capitalize text-soft flex-1 flex items-center justify-center cursor-pointer relative",
        activeIndex === index
          ? "text-main-txt before:absolute before:h-1 before:w-full before:bg-btn before:-bottom-3 "
          : ""
      )}
    >
      {children}
    </li>
  );
};
