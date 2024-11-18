import { GridColDef, GridRowsProp } from "@mui/x-data-grid";

export const LeftMenuList = [
  {
    id: 1,
    name: "dashboards",
    items: [
      {
        id: 1,
        title: "Overview",
        url: "/",
        icon: (
          <svg
            width='20'
            height='20'
            viewBox='0 0 20 20'
            fill='currentcolor'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d='M7.81249 9.09609C7.90752 9.04123 7.98644 8.96231 8.04129 8.86727C8.09615 8.77223 8.12502 8.66442 8.12499 8.55469V2.92969C8.12443 2.83004 8.10006 2.73198 8.0539 2.64367C8.00774 2.55536 7.94113 2.47936 7.85964 2.42202C7.77814 2.36469 7.68412 2.32766 7.5854 2.31405C7.48669 2.30043 7.38616 2.31062 7.29218 2.34375C5.46794 2.98939 3.93383 4.26457 2.96563 5.94005C1.99743 7.61554 1.65863 9.58145 2.01015 11.4844C2.02837 11.5828 2.06995 11.6754 2.1314 11.7544C2.19285 11.8333 2.27237 11.8964 2.36327 11.9383C2.44519 11.9766 2.53456 11.9963 2.62499 11.9961C2.73469 11.9961 2.84247 11.9673 2.93749 11.9125L7.81249 9.09609ZM6.87499 3.87656V8.19375L3.13437 10.3523C3.12499 10.2344 3.12499 10.1156 3.12499 10C3.1261 8.73309 3.47678 7.49106 4.13843 6.41066C4.80007 5.33025 5.74701 4.45337 6.87499 3.87656ZM18.125 10C18.1256 11.7837 17.5393 13.518 16.4564 14.9354C15.3735 16.3528 13.8543 17.3745 12.1332 17.8428C10.4121 18.3111 8.58472 18.2 6.93298 17.5267C5.28125 16.8534 3.89698 15.6553 2.99374 14.1172C2.95164 14.0461 2.92403 13.9675 2.91251 13.8857C2.901 13.8039 2.9058 13.7207 2.92665 13.6407C2.9475 13.5608 2.98398 13.4859 3.03398 13.4201C3.08398 13.3544 3.14651 13.2992 3.21796 13.2578L9.37499 9.67422V2.5C9.37499 2.33424 9.44084 2.17527 9.55805 2.05806C9.67526 1.94085 9.83423 1.875 9.99999 1.875C11.4179 1.87572 12.8109 2.24729 14.0408 2.95282C15.2706 3.65834 16.2946 4.67328 17.0109 5.89688C17.0195 5.90938 17.0273 5.92188 17.0351 5.93516C17.043 5.94844 17.0508 5.96406 17.0578 5.97812C17.7588 7.20247 18.1268 8.58916 18.125 10Z'
              fill='currentcolor'
            />
          </svg>
        ),
      },
    ],
  },
  {
    id: 2,
    name: "adminstration",
    items: [
      {
        id: 2,
        title: "Regions",
        url: "/adminstration/regions",
        icon: (
          <svg
            width='20'
            height='20'
            viewBox='0 0 20 20'
            fill='currentcolor'
            xmlns='http://www.w3.org/2000/svg'
          >
            <g clipPath='url(#clip0_1_5096)'>
              <path
                d='M17.7387 7.55754C17.5974 7.68293 17.4496 7.80175 17.2937 7.91281C16.9329 8.16851 16.7367 8.30902 16.6139 8.41539C16.9739 9.21929 17.1949 10.0987 17.2387 11.027H14.6443H13.9564H10.3451V6.65562H9.65481H6.90844C7.0166 6.39757 7.13234 6.15226 7.25668 5.92394C7.62863 5.23785 8.06734 4.6941 8.53496 4.33074C8.57016 4.30339 8.60535 4.27914 8.64055 4.25359C8.85457 4.21343 9.07273 4.18527 9.29274 4.1639C9.27996 4.01793 9.27109 3.87144 9.27109 3.72417C9.27109 3.39808 9.30289 3.07953 9.3618 2.77039C7.23527 2.92574 5.31754 3.85214 3.89898 5.27125C2.33887 6.83058 1.37156 8.99203 1.37207 11.3722C1.37152 13.7523 2.33887 15.9138 3.89898 17.4731C5.45805 19.0332 7.61949 20.0006 9.99992 20C12.3804 20.0006 14.5416 19.0332 16.1009 17.4731C17.6609 15.9138 18.628 13.7524 18.6278 11.3722C18.628 10.0039 18.3069 8.70839 17.7387 7.55754ZM4.87547 6.24769C5.55008 5.57332 6.35605 5.03324 7.25094 4.66597C6.82445 5.21804 6.46137 5.89269 6.16656 6.65566H4.50012C4.62055 6.51539 4.74461 6.37828 4.87547 6.24769ZM3.97383 7.34586H5.9252C5.58504 8.44484 5.38379 9.69605 5.35356 11.027H2.76121C2.82504 9.66711 3.26246 8.40812 3.97383 7.34586ZM3.69152 14.9384C3.14777 13.9794 2.81621 12.8861 2.76121 11.7173H5.3559C5.38223 12.8671 5.53652 13.9546 5.79797 14.9384H3.69152ZM4.87547 16.4966C4.60648 16.2276 4.35984 15.9367 4.1357 15.6286H6.00418C6.18742 16.1776 6.40145 16.6909 6.64984 17.1494C6.83387 17.4882 7.03562 17.7984 7.25227 18.0792C6.35687 17.7119 5.55063 17.1712 4.87547 16.4966ZM9.65481 18.6107C9.30969 18.5945 8.97137 18.553 8.64082 18.4907C8.60535 18.4652 8.5702 18.441 8.53496 18.4139C7.83297 17.869 7.19879 16.9155 6.75121 15.6912C6.74395 15.6709 6.73742 15.6489 6.72984 15.6286H9.65481V18.6107ZM9.65481 14.9384H6.5109C6.23746 13.9712 6.07141 12.8788 6.04352 11.7173H9.65481V14.9384ZM9.65481 11.027H6.04117C6.07297 9.67781 6.29324 8.41984 6.6493 7.34586H9.65477V11.027H9.65481ZM10.3451 11.7173H13.9587C13.9313 12.8786 13.764 13.9713 13.4905 14.9384H10.3451V11.7173ZM11.4649 18.4139C11.43 18.441 11.3945 18.4652 11.3591 18.4907C11.0285 18.553 10.6902 18.5945 10.3451 18.6107V15.6286H13.2708C13.1159 16.06 12.9392 16.4599 12.7432 16.8204C12.3712 17.5064 11.9325 18.05 11.4649 18.4139ZM15.1247 16.4966C14.4496 17.171 13.6438 17.7114 12.7487 18.0789C13.2054 17.4877 13.5914 16.7589 13.8967 15.9289C13.9327 15.8314 13.965 15.7292 13.9984 15.6286H15.8642C15.64 15.9367 15.3934 16.2276 15.1247 16.4966ZM16.3084 14.9384H14.2066C14.4673 13.9553 14.62 12.8661 14.6463 11.7173H17.2387C17.1837 12.8861 16.8519 13.9794 16.3084 14.9384Z'
                fill='currentcolor'
              />
              <path
                d='M12.2563 6.78676C13.134 7.40977 13.3279 7.55809 13.6368 8.14742C13.8811 8.61402 14.277 9.43199 14.277 9.43199C14.2958 9.46926 14.3336 9.49301 14.3756 9.49301C14.417 9.49301 14.4556 9.46926 14.4741 9.43199C14.4741 9.43199 14.8703 8.61402 15.1145 8.14742C15.4229 7.55805 15.6171 7.40977 16.495 6.78676C17.4572 6.10434 18.1 4.99336 18.1 3.72418C18.0999 1.6675 16.4322 0 14.3755 0C12.3186 0 10.6516 1.6675 10.6516 3.72418C10.6516 4.99336 11.2939 6.1043 12.2563 6.78676ZM14.3755 2.14895C15.2456 2.14895 15.951 2.85434 15.951 3.72418C15.951 4.59426 15.2456 5.29965 14.3755 5.29965C13.5054 5.29965 12.8003 4.59426 12.8003 3.72418C12.8003 2.85434 13.5054 2.14895 14.3755 2.14895Z'
                fill='#CACCCD'
              />
            </g>
            <defs>
              <clipPath id='clip0_1_5096'>
                <rect width='20' height='20' fill='white' />
              </clipPath>
            </defs>
          </svg>
        ),
      },
    ],
  },
];

export const notifications = [
  {
    message: "You fixed a bug.",
    time: "Just now",
    icon: "/BugBeetle.svg",
  },
  {
    message: "New user registered.",
    time: "59 minutes ago",
    icon: "/User.svg",
  },
  {
    message: "You fixed a bug.",
    time: "12 hours ago",
    icon: "/BugBeetle.svg",
  },
  {
    message: "Andi Lane subscribed to you.",
    time: "Today, 11:59 AM",
    icon: "/Broadcast.svg",
  },
];
export const activities = [
  {
    message: "changed the style.",
    time: "Just now",
    icon: "/a1.png",
  },
  {
    message: "released a new version.",
    time: "59 minutes ago",
    icon: "/a2.png",
  },
  {
    message: "submitted a bug.",
    time: "12 hours ago",
    icon: "/a3.png",
  },
  {
    message: "modified A data in page X.",
    time: "Today, 11:59 AM",
    icon: "/a4.png",
  },
  {
    message: "deleted a page in project X.",
    time: "Feb 2, 2024",
    icon: "/a5.png",
  },
];
export const contacts = [
  {
    name: "Natali Craig",
    img: "/c1.png",
  },
  {
    name: "Drew Cano",
    img: "/c2.png",
  },
  {
    name: "Andi Lane",
    img: "/c3.png",
  },
  {
    name: "Koray Okumus",
    img: "/c4.png",
  },
  {
    name: "Kate Morrison",
    img: "/c5.png",
  },
  {
    name: "Melody Macy",
    img: "/c6.png",
  },
];

export const cards = [
  {
    id: 1,
    title: "Views",
    number: 7265,
    perc: 11.01,
  },
  {
    id: 2,
    title: "Visits",
    number: 6671,
    perc: -0.03,
  },
  {
    id: 3,
    title: "New Users",
    number: 156,
    perc: 15.03,
  },
  {
    id: 4,
    title: "Active Users",
    number: 2318,
    perc: 6.08,
  },
];

export const nums = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

export const megaBarData = [
  { name: "Jan", value: 15000 },
  { name: "Feb", value: 25000 },
  { name: "Mar", value: 12000 },
  { name: "Apr", value: 28000 },
  { name: "May", value: 20000 },
  { name: "Jun", value: 30000 },
  { name: "Jul", value: 17000 },
  { name: "Aug", value: 23000 },
  { name: "Sep", value: 29000 },
  { name: "Oct", value: 14000 },
  { name: "Nov", value: 26000 },
  { name: "Dec", value: 18000 },
];

export const miniBarData = [
  { name: "Linux", value: 15000 },
  { name: "Mac", value: 25000 },
  { name: "iOS", value: 12000 },
  { name: "Windows", value: 28000 },
  { name: "Android", value: 20000 },
  { name: "Other", value: 17000 },
];

export const doughnutChartData = [
  { location: "United States", perc: 52.1 },
  { location: "Canada", perc: 22.8 },
  { location: "Mexico", perc: 13.9 },
  { location: "Other", perc: 11.2 },
];

export const countryCols: GridColDef[] = [
  {
    field: "country",
    headerName: "Country",
    minWidth: 80,
    flex: 2,
    renderCell: params => (
      <div className='flex items-center gap-[12px] h-full '>
        <img src={params.row.image} alt='flag' className='max-w-[22px]' />
        <span className='capitalize'>{params.row.country}</span>
      </div>
    ),
  },
  { field: "region", headerName: "Region", minWidth: 80, flex: 2 },
  { field: "createdAt", headerName: "Created at", minWidth: 150, flex: 3 },
  {
    field: "action",
    headerName: "Action",
    minWidth: 80,
    flex: 1,
    renderCell: () => <div className='cursor-pointer m-auto w-fit'>...</div>,
  },
];

export const countryRows: GridRowsProp = [
  {
    id: 1,
    country: "Egypt",
    image: "/flag.png",
    region: "Africa",
    createdAt: "12 Aug 2022 - 12:25 am",
  },
  {
    id: 2,
    country: "Egypt",
    image: "/flag.png",
    region: "Africa",
    createdAt: "12 Aug 2022 - 12:25 am",
  },
];

export const cityColumns: GridColDef[] = [
  { field: "city", headerName: "City", minWidth: 80, flex: 2 },
  {
    field: "country",
    headerName: "Country",
    minWidth: 80,
    flex: 2,
    renderCell: params => (
      <div className='flex items-center gap-[12px] h-full '>
        <img src={params.row.image} alt='flag' className='max-w-[22px]' />
        <span className='capitalize'>{params.row.country}</span>
      </div>
    ),
  },
  { field: "region", headerName: "Region", minWidth: 80, flex: 2 },
  { field: "createdAt", headerName: "Created at", minWidth: 150, flex: 3 },
  {
    field: "status",
    headerName: "Status",
    minWidth: 80,
    flex: 2,
    renderCell: params => {
      return params.row.status === "Active" ? (
        <span className='text-[#16C098] bg-[#16c0982f] px-3 py-1 rounded-lg m-auto  '>
          {params.row.status}
        </span>
      ) : (
        <span className='text-[#ff3f3f] bg-[#ff3f3f2f] px-3 py-1 rounded-lg  '>
          {params.row.status}
        </span>
      );
    },
  },
  {
    field: "action",
    headerName: "Action",
    minWidth: 80,
    flex: 1,
    renderCell: () => <div className='cursor-pointer m-auto w-fit'>...</div>,
  },
];

export const cityRows: GridRowsProp = [
  {
    id: 1,
    city: "Cairo",
    image: "/flag.png",
    country: "Egypt",
    region: "Africa",
    createdAt: "12 Aug 2022 - 12:25 am",
    status: (Math.floor(Math.random() * 2) + 1) % 2 ? "Active" : "Inactive",
  },
  {
    id: 2,
    city: "Cairo",
    image: "/flag.png",
    country: "Egypt",
    region: "Africa",
    createdAt: "12 Aug 2022 - 12:25 am",
    status: (Math.floor(Math.random() * 2) + 1) % 2 ? "Active" : "Inactive",
  },
  {
    id: 3,
    city: "Cairo",
    image: "/flag.png",
    country: "Egypt",
    region: "Africa",
    createdAt: "12 Aug 2022 - 12:25 am",
    status: (Math.floor(Math.random() * 2) + 1) % 2 ? "Active" : "Inactive",
  },
  {
    id: 4,
    city: "Cairo",
    image: "/flag.png",
    country: "Egypt",
    region: "Africa",
    createdAt: "12 Aug 2022 - 12:25 am",
    status: (Math.floor(Math.random() * 2) + 1) % 2 ? "Active" : "Inactive",
  },
  {
    id: 5,
    city: "Cairo",
    image: "/flag.png",
    country: "Egypt",
    region: "Africa",
    createdAt: "12 Aug 2022 - 12:25 am",
    status: (Math.floor(Math.random() * 2) + 1) % 2 ? "Active" : "Inactive",
  },
  {
    id: 6,
    city: "Cairo",
    image: "/flag.png",
    country: "Egypt",
    region: "Africa",
    createdAt: "12 Aug 2022 - 12:25 am",
    status: (Math.floor(Math.random() * 2) + 1) % 2 ? "Active" : "Inactive",
  },
  {
    id: 7,
    city: "Cairo",
    image: "/flag.png",
    country: "Egypt",
    region: "Africa",
    createdAt: "12 Aug 2022 - 12:25 am",
    status: (Math.floor(Math.random() * 2) + 1) % 2 ? "Active" : "Inactive",
  },
  {
    id: 8,
    city: "Cairo",
    image: "/flag.png",
    country: "Egypt",
    region: "Africa",
    createdAt: "12 Aug 2022 - 12:25 am",
    status: (Math.floor(Math.random() * 2) + 1) % 2 ? "Active" : "Inactive",
  },
  {
    id: 9,
    city: "Cairo",
    image: "/flag.png",
    country: "Egypt",
    region: "Africa",
    createdAt: "12 Aug 2022 - 12:25 am",
    status: (Math.floor(Math.random() * 2) + 1) % 2 ? "Active" : "Inactive",
  },
  {
    id: 10,
    city: "Cairo",
    image: "/flag.png",
    country: "Egypt",
    region: "Africa",
    createdAt: "12 Aug 2022 - 12:25 am",
    status: (Math.floor(Math.random() * 2) + 1) % 2 ? "Active" : "Inactive",
  },
  {
    id: 11,
    city: "Cairo",
    image: "/flag.png",
    country: "Egypt",
    region: "Africa",
    createdAt: "12 Aug 2022 - 12:25 am",
    status: (Math.floor(Math.random() * 2) + 1) % 2 ? "Active" : "Inactive",
  },
];

export const regions = [
  { name: "africa" },
  { name: "europa" },
  { name: "asia" },
];

export const modalTabs = ["region", "country", "city"];

export const countries = [
  { name: "egypt", img: "/flag.png" },
  { name: "nigeria", img: "/ng 1.png" },
];
