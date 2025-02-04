/**
 * A component that displays an error message.
 * 
 * @component
 * @param {Object} props - The component props
 * @param {string} props.message - The error message to display
 * @returns {JSX.Element} A styled error message component
 */
interface ErrorMessageProps {
  message: string;
}

const ErrorMessage: React.FC<ErrorMessageProps> = ({ message }) => {
  return (
    <div className={`flex items-center p-4 my-8 rounded-lg bg-red-50`} role="alert">
      <svg className="w-5 h-5 text-red-600 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v4a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd"></path>
      </svg>      
      <p className="text-red-600 font-medium">{message}</p>
    </div>
  );
};

export default ErrorMessage;