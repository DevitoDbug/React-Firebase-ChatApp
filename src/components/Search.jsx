import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faClose } from '@fortawesome/free-solid-svg-icons';
import { useContext } from 'react';
import { SearchContext } from '../context/SearchContext';

const Search = () => {
  const [, setSearchOpen] = useContext(SearchContext);
  const handleCloseSearch = () => {
    setSearchOpen(false);
  };
  return (
    <div className="absolute left-[10%] top-[10%] flex h-[30%] w-[80%] flex-col items-center rounded-lg bg-[#bae9f8] px-1 py-2 shadow-lg">
      <button
        onClick={handleCloseSearch}
        className="self-end pr-1 text-[110%] font-bold text-C_GreyBorder"
      >
        <FontAwesomeIcon icon={faClose} />
      </button>
      <div className=" flex flex-row items-center justify-between border-b-2 border-gray-300">
        <input
          className="w-[95%]  bg-transparent p-3 text-[110%] outline-none"
          type="text"
          placeholder="Search name..."
          name="searchName"
        />
        <button>
          <FontAwesomeIcon
            icon={faSearch}
            className="ml-2 self-center text-[130%] font-bold text-C_GreyBorder"
          />
        </button>
      </div>
      something
    </div>
  );
};

export default Search;
