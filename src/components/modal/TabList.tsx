import { ReactNode } from "react";

const TabList = ({ children }: { children: ReactNode }) => {
  return (
    <ul className='max-w-[622px] h-7 flex w-full text-base'>{children}</ul>
  );
};

export default TabList;
