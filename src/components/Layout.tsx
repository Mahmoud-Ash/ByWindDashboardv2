import TopNav from "./topNav/TopNav";
import RightNav from "./RightNav";
import LeftNav from "./leftNav/LeftNav";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className='min-h-screen overflow-x-hidden flex'>
      <LeftNav className='shrink-0 bg-main-bg h-screen overflow-y-hidden hover:overflow-y-auto sticky top-0 left-0 z-20 max-[1500px]:fixed ' />
      {/* flex flex-col h-full */}
      <div className='grow sm:max-[1500px]:ml-20 overflow-x-hidden '>
        <TopNav className='fixed bottom-0 sm:relative bg-main-bg w-full z-10' />
        <main className='pt-2 pb-20 px-2 sm:p-7 max-w-[1300px] w-full mx-auto '>
          <Outlet />
        </main>
      </div>
      <RightNav className='shrink-0 bg-main-bg h-screen overflow-hidden hover:overflow-y-auto sticky top-0 right-0 z-10 max-[1790px]:fixed ' />
    </div>
  );
};

export default Layout;
