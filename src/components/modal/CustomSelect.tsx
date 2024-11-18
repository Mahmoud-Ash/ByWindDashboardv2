import { useEffect, useState } from "react";
import { twMerge } from "tailwind-merge";

type Option = {
  name: string;
  img?: string;
};

type CustomSelectProps = {
  options: Option[];
  name?: string;
  className?: string;
};
const CustomSelect = ({ options, name, className }: CustomSelectProps) => {
  const [selectedOption, setSelectedOption] = useState<Option>();
  const [selectedName, setSelectedName] = useState("");
  useEffect(() => {
    const option = options.find(option => option.name === selectedName);
    setSelectedOption(option);
  }, [selectedName, setSelectedOption, options]);

  return (
    <div
      className={twMerge(
        "relative flex items-center outline outline-1 outline-btn focus-within:ring rounded-lg px-4",
        className
      )}
    >
      {selectedOption?.img && (
        <img src={selectedOption.img} alt='flag' className='w-10' />
      )}
      <select
        onChange={e => setSelectedName(e.target.value)}
        value={selectedName}
        name={name}
        id={name}
        aria-placeholder={"select " + name}
        className='h-[52px] w-full px-4 py-2 bg-main-bg outline-none border-none appearance-none capitalize'
      >
        <option value=''>select {name}</option>
        {options?.map(option => (
          <option key={option.name} value={option.name}>
            {option.name}
          </option>
        ))}
      </select>
      <img
        src='/arrowDown.svg'
        alt='drop down'
        className='absolute right-4 z-50 pointer-events-none'
      />
    </div>
  );
};

export default CustomSelect;
