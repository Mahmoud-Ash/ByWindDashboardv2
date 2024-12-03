import { twMerge } from "tailwind-merge";
import { activities, contacts, notifications } from "../lib/constants";
import { useEffect, useRef, useState } from "react";
import { useWindowSize } from "../hooks/useWindowSize";

const RightNav = ({ className }: { className?: string }) => {
  const [expanded, setExpanded] = useState<boolean>(false);
  const windowSize = useWindowSize();
  const sidebarRef = useRef<HTMLElement>(null);
  const widthThreshold = 1790;

  useEffect(() => {
    return windowSize <= widthThreshold
      ? setExpanded(false)
      : setExpanded(true);
  }, [windowSize]);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (
        expanded &&
        windowSize <= widthThreshold &&
        !sidebarRef.current?.contains(e.target as Node)
      )
        setExpanded(false);
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [expanded, windowSize]);

  return (
    <>
      <input
        type='checkbox'
        id='checkR'
        className='peer/r hidden'
        aria-label='hidden'
        onChange={() => setExpanded(prev => !prev)}
      />
      <aside
        ref={sidebarRef}
        className={twMerge(
          "relative flex flex-col gap-4 p-4 border-l border-hover w-[280px] duration-500 ",
          className,
          !expanded ? "translate-x-full w-0  px-0" : ""
        )}
      >
        {/* NOTIFICATION  */}
        <div className='flex flex-col gap-1'>
          <label
            htmlFor='checkR'
            className='cursor-pointer absolute right-8 top-6 px-3 py-1 rounded-lg hover:bg-hover duration-300 min-[1790px]:hidden'
          >
            X
          </label>
          <h1 className='px-1 py-2 rounded-lg cursor-default hover:px-2 duration-500 '>
            Notifications
          </h1>
          {notifications.map((item, i) => (
            <div
              key={i}
              className='group flex items-start gap-2 p-2 rounded-xl cursor-default hover:bg-hover'
            >
              <img
                src={item.icon}
                alt=''
                className={`p-1 rounded-lg ${
                  i % 2 !== 0 ? "bg-bg3" : "bg-bg4"
                }`}
              />
              <div className='shrink-0 flex flex-col items-start rounded-lg group-hover:px-1 duration-500'>
                <p>{item.message}</p>
                <span className='text-xs text-soft group-hover:text-main-txt group-hover:text-sm duration-500'>
                  {item.time}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* ACTIVITIES  */}
        <div className='flex flex-col gap-1'>
          <h1 className='px-1 py-2 rounded-lg cursor-default hover:px-2 duration-500'>
            Activities
          </h1>
          {activities.map((item, i) => (
            <div
              key={i}
              className='group flex items-start gap-2 p-2 rounded-xl cursor-default hover:bg-hover'
            >
              <div className='shrink-0 flex flex-col items-center relative'>
                <img src={item.icon} alt='' />
                <div
                  className={`absolute w-px h-[16.5px] bg-hover ${
                    i !== activities.length - 1 ? "-bottom-full" : ""
                  }`}
                ></div>
              </div>
              <div className='shrink-0 flex flex-col items-start rounded-lg group-hover:px-1 duration-500'>
                <p>
                  {item.message.charAt(0).toUpperCase() +
                    item.message.slice(1, item.message.length)}
                </p>
                <span className='text-xs text-soft group-hover:text-main-txt group-hover:text-sm duration-500'>
                  {item.time}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* CONTACTS */}
        <div className='flex flex-col gap-1'>
          <h1 className='px-1 py-2 rounded-lg cursor-default hover:px-2 duration-500'>
            Contacts
          </h1>
          {contacts.map((item, i) => (
            <div
              key={i}
              className='flex items-center gap-2 p-2 rounded-lg cursor-default'
            >
              <i className='shrink-0 group rounded-full h-6 w-6 overflow-hidden'>
                <img
                  src={item.img}
                  alt=''
                  className='group-hover:scale-110 duration-500'
                />
              </i>
              <span className='shrink-0 hover:px-1 duration-500'>
                {item.name}
              </span>
            </div>
          ))}
        </div>
      </aside>
    </>
  );
};

export default RightNav;
