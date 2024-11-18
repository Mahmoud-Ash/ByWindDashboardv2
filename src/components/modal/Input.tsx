type InputProps = {
  type?: string;
  placeholder?: string;
};
const Input = ({ type = "text", placeholder }: InputProps) => {
  return (
    <div className='h-[60px] flex items-center px-4 py-2 rounded-lg border border-btn focus-within:ring w-full'>
      <input
        type={type}
        placeholder={placeholder}
        className='bg-transparent size-full placeholder:text-softer text-base outline-none'
      />
    </div>
  );
};

export default Input;
