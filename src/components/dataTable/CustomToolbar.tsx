import {
  GridSlots,
  GridToolbarFilterButton,
  PropsFromSlot,
} from "@mui/x-data-grid";

type CustomToolbarProps = PropsFromSlot<GridSlots["toolbar"]>;

const CustomToolbar = ({
  title,
  searchText,
  handleSearch,
}: CustomToolbarProps) => {
  return (
    <div className='flex items-center justify-between pr-[50px] pl-2 pb-5 pt-2'>
      <h1 className='text-[20px] font-bold capitalize'>{title}</h1>
      <div className='flex gap-2'>
        {/* SEARCH CONTAINER */}
        <div className='group peer w-16 md:w-40 flex items-center justify-between gap-2 px-2 py-1 rounded-lg text-softer bg-hover-soft focus-within:bg-main-bg cursor-pointer md:hover:bg-hover shadow-input-focus duration-300'>
          <div className='flex items-center gap-2 w-[116px] group-focus-within:text-main-txt '>
            <i>
              <svg
                width='14'
                height='14'
                viewBox='0 0 14 14'
                fill='currentColor'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M13.3501 13.3563C13.2568 13.4482 13.1311 13.4998 13.0001 13.5C12.8673 13.4994 12.7398 13.448 12.6438 13.3563L9.94385 10.65C8.80671 11.6051 7.34474 12.0844 5.86285 11.9878C4.38095 11.8912 2.99355 11.2263 1.99 10.1316C0.986453 9.03701 0.444243 7.5972 0.476455 6.11251C0.508667 4.62782 1.11282 3.21288 2.1629 2.1628C3.21298 1.11272 4.62791 0.50857 6.1126 0.476358C7.59729 0.444145 9.0371 0.986356 10.1317 1.9899C11.2264 2.99345 11.8913 4.38086 11.9879 5.86275C12.0845 7.34465 11.6052 8.80662 10.6501 9.94375L13.3501 12.6438C13.3973 12.6903 13.4349 12.7457 13.4605 12.8069C13.4861 12.8681 13.4993 12.9337 13.4993 13C13.4993 13.0663 13.4861 13.1319 13.4605 13.1931C13.4349 13.2543 13.3973 13.3097 13.3501 13.3563ZM6.2501 11C7.18956 11 8.10792 10.7214 8.88906 10.1995C9.67019 9.67754 10.279 8.9357 10.6385 8.06775C10.998 7.1998 11.0921 6.24473 10.9088 5.32332C10.7255 4.40191 10.2732 3.55554 9.60885 2.89124C8.94455 2.22694 8.09819 1.77455 7.17678 1.59127C6.25537 1.40799 5.3003 1.50206 4.43235 1.86157C3.5644 2.22109 2.82255 2.82991 2.30062 3.61104C1.77868 4.39217 1.5001 5.31054 1.5001 6.25C1.50175 7.50927 2.00273 8.71649 2.89317 9.60693C3.78361 10.4974 4.99083 10.9983 6.2501 11Z'
                  fill='currentColor'
                  fillOpacity='1'
                />
              </svg>
            </i>
            <input
              type='text'
              placeholder='Search...'
              value={searchText}
              onChange={handleSearch}
              className='outline-none bg-transparent w-[90%] cursor-pointer focus:cursor-default placeholder:text-softer '
            />
          </div>
        </div>

        {/* <TextField
            label='Search'
            variant='outlined'
            value={searchText}
            onChange={handleSearch}
            sx={{ height: 10 }}
          /> */}
        <GridToolbarFilterButton />
      </div>
    </div>
  );
};

export default CustomToolbar;
