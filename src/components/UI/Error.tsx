

const ErrorMessage = ({ message,closeError }:{message:string,closeError:()=>void}) => {
  return (
    <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative  transition-opacity duration-500 ease-in-out " role="alert">
      <strong className="font-bold">Error!</strong>
      <span className="block sm:inline">{message}</span>
      <span className="absolute top-0 bottom-0 right-0 px-4 py-3">
        <svg
          className="fill-current h-6 w-6 text-red-500"
          role="button"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          onClick={() => {
            closeError()
            // Handle close or dismiss functionality if needed
          }}
        >
          <title>Close</title>
          <path
            fillRule="evenodd"
            d="M14.348 5.652a.5.5 0 0 1 0 .707l-8.586 8.586a.5.5 0 0 1-.707-.707l8.586-8.586a.5.5 0 0 1 .707 0zm-8.586 8.586a.5.5 0 0 1 0-.707L14.348 6.96a.5.5 0 0 1 .707.707l-8.586 8.586a.5.5 0 0 1-.707 0z"
          />
        </svg>
      </span>
    </div>
  );
};

export default ErrorMessage;
