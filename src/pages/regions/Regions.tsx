import { useRef } from "react";
import DataTable from "../../components/dataTable/DataTable";
import Region from "../../components/Region";
import {
  cityColumns,
  cityRows,
  countryCols,
  countryRows,
  regions,
} from "../../lib/constants";
import Modal from "../../components/modal/Modal";

const Regions = () => {
  const modalRef = useRef<HTMLDialogElement>(null);
  function closeModal() {
    if (!modalRef.current) return;
    modalRef.current.close();
  }
  return (
    <>
      <dialog
        ref={modalRef}
        className='m-auto backdrop:backdrop-blur bg-transparent'
      >
        <Modal closeModal={closeModal} />
      </dialog>
      {/* flex flex-col gap-2 sm:gap-4 */}
      <main className='w-full space-y-2 sm:space-y-4'>
        {/* HEADER  */}
        <div className='flex justify-between'>
          <h1 className='px-2 py-1 rounded-lg font-semibold'>Summary</h1>
          <button
            onClick={() => modalRef.current?.showModal()}
            className='bg-btn group flex items-center justify-center gap-[10px] px-4 py-2 rounded-xl '
          >
            <svg
              width='20'
              height='21'
              viewBox='0 0 20 21'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M10 4.66675V16.3334'
                stroke='white'
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
              />
              <path
                d='M4.16675 10.5H15.8334'
                stroke='white'
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
              />
            </svg>
            <span className='rounded-lg text-white group-hover:px-1 duration-500'>
              Create
            </span>
          </button>
        </div>
        {/* BODY  */}
        {/* flex flex-col items-center gap-7 overflow-hidden */}
        <div className='space-y-7'>
          {/* TOP SECTION  */}
          <section className='flex flex-col lg:flex-row gap-5'>
            {/* REGIONS  */}
            <div className='lg:w-[375px] flex flex-col gap-8 pt-8 px-4 bg-bg2 rounded-xl '>
              <h1>Regions</h1>
              <ul className=' flex flex-col gap-[10px] px-4 pb-[55px]'>
                {regions.map(region => (
                  <Region key={region.name} region={region.name} />
                ))}
              </ul>
            </div>
            {/* COUNTRY TABLE  */}
            <DataTable
              title='country'
              columns={countryCols}
              rows={countryRows}
              pageSize={2}
              className='flex-1'
            />
          </section>
          {/* BOTTOM SECTION  */}
          <DataTable
            title='city'
            columns={cityColumns}
            rows={cityRows}
            pageSize={10}
            className='flex-1'
          />
        </div>
      </main>
    </>
  );
};

export default Regions;
