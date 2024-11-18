import { Button } from "@mui/joy";
import TabsProvider from "../../contexts/tabContext/TabContextProvider";
import { countries, modalTabs, regions } from "../../lib/constants";
import Input from "./Input";
import { Tab } from "./Tab";
import TabList from "./TabList";
import TabPanel from "./TabPanel";
import CustomSelect from "./CustomSelect";

const Modal = ({ closeModal }: { closeModal: () => void }) => {
  return (
    <div className='min-h-[743px] flex flex-col items-center gap-7 px-6 py-7 rounded-2xl bg-main-bg text-main-txt'>
      <div className='flex justify-between items-center font-medium text-xl gap-5 w-full '>
        <span className=''>Create</span>
        <span
          onClick={closeModal}
          className='rounded-lg px-2 cursor-pointer bg-hover-soft hover:bg-hover '
        >
          X
        </span>
      </div>
      <p className='font-medium text-xs text-soft'>
        Create your region, country and city or you can create your city and
        attached to your existing country or existing region.
      </p>
      {/* TABS  */}
      <TabsProvider>
        <TabList>
          {modalTabs.map((tab, i) => (
            <Tab key={tab} index={i}>
              {tab}
            </Tab>
          ))}
        </TabList>
        {/* REGION  */}
        <TabPanel index={0}>
          <div className='flex flex-col gap-7 sm:w-[632px] grow '>
            <p className='text-xs text-soft font-medium'>
              Add your Region name, for example Africa, Asia, etc. Then go to
              next page Country be press next button.
            </p>
            <Input type='text' placeholder='region name' />
            <img src='/country.svg' alt='' className='size-fit mx-auto' />
            <div className='w-[318px] flex justify-between mx-auto mt-auto mb-5'>
              <Button
                onClick={closeModal}
                className='w-[110px] h-[58px] outline outline-btn text-btn bg-transparent hover:bg-btn/5 rounded-xl '
              >
                Back
              </Button>
              <Button
                variant='solid'
                className='w-[110px] h-[58px] rounded-xl outline outline-btn bg-btn hover:bg-btn/80 hover:outline-btn/80'
              >
                Create
              </Button>
            </div>
          </div>
        </TabPanel>
        {/* COUNTRY  */}
        <TabPanel index={1}>
          <div className='flex flex-col gap-7 sm:w-[632px] grow'>
            <p className='text-xs text-soft font-medium'>
              Add your Country name, for example Egypt, Russia, etc. Then go to
              next page City be press next button.
            </p>
            <Input type='text' placeholder='country name' />
            <input id='upload' type='file' className='hidden' />
            <label
              htmlFor='upload'
              className=' flex flex-col items-center gap-2 px-4 py-[6.5px] bg-hover-soft rounded-lg'
            >
              <div className='flex gap-2'>
                <img src='/upload-cloud.svg' alt='' />
                <p className='leading-[22px] text-soft'>
                  Click to{" "}
                  <span className='font-semibold text-main-txt'>Upload</span>{" "}
                  flag image
                </p>
              </div>
              <p className='text-soft text-xs'>
                All files are supported but we recommend a jpge, png, svg file
              </p>
            </label>
            <CustomSelect name='region' options={regions} className='' />
            <div className='w-[318px] flex justify-between mx-auto mt-auto mb-5'>
              <Button
                onClick={closeModal}
                className='w-[110px] h-[58px] outline outline-btn text-btn bg-transparent hover:bg-btn/5 rounded-xl '
              >
                Back
              </Button>
              <Button
                variant='solid'
                className='w-[110px] h-[58px] rounded-xl outline outline-btn bg-btn hover:bg-btn/80 hover:outline-btn/80'
              >
                Create
              </Button>
            </div>
          </div>
        </TabPanel>
        {/* City  */}
        <TabPanel index={2}>
          <div className='flex flex-col gap-7 sm:w-[632px] grow'>
            <p className='text-xs text-soft font-medium'>
              Add your city name, for example Cairo, London, etc. Then press don
              button.
            </p>
            <Input type='text' placeholder='city name' />
            <CustomSelect
              name='your country'
              options={countries}
              className=''
            />
            <div className='w-[318px] flex justify-between mx-auto mt-auto mb-5'>
              <Button
                onClick={closeModal}
                className='w-[110px] h-[58px] outline outline-btn text-btn bg-transparent hover:bg-btn/5 rounded-xl '
              >
                Back
              </Button>
              <Button
                variant='solid'
                className='w-[110px] h-[58px] rounded-xl outline outline-btn bg-btn hover:bg-btn/80 hover:outline-btn/80'
              >
                Create
              </Button>
            </div>
          </div>
        </TabPanel>
      </TabsProvider>
    </div>
  );
};

export default Modal;
