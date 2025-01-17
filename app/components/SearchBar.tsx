import { FiSearch } from 'react-icons/fi';

interface SearchBarProps {
  placeholder: string;
}

export default function SearchBar({ placeholder }: SearchBarProps) {
  return (
    <div className="relative">
      <input 
        type="text" 
        placeholder={placeholder}
        className="w-full lg:w-40 py-1 pl-10 pr-4 rounded-full border border-gray-300 
                 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500
                 transition-all duration-200 text-sm"
      />
      <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
    </div>
  );
} 