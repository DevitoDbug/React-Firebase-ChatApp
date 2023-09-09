import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faClose } from '@fortawesome/free-solid-svg-icons';
import { useContext } from 'react';
import { SearchContext } from '../context/SearchContext';
import Contact from './Contact';
import {
  collection,
  query,
  where,
  getDocs,
} from 'firebase/firestore';
import { db } from '../firebase';

const Search = () => {
  const [, setSearchOpen] = useContext(SearchContext);
  const [searchedUserName, setSearchedUserName] = useState('');
  const [searchResult, setSearchResult] = useState({});

  const handleCloseSearch = () => {
    setSearchOpen(false);
    setSearchResult({});
  };

  const handleSelectByEnterKey = (event) => {
    if (event.key === 'Enter' || event.keyCode === 13) {
      handleSearch();
    }
  };

  const handleSearch = async () => {
    const q = query(
      collection(db, 'users'),
      where('firstName', '==', searchedUserName),
    );

    try {
      //Searching for a user from firebase
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        setSearchResult(doc.data());
      });
    } catch (e) {
      console.log('Fetching data from firestore error: ', e);
    }
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
          onKeyDown={handleSelectByEnterKey}
          onChange={(e) => {
            setSearchedUserName(e.target.value);
            setSearchResult({});
          }}
          className="w-[95%]  bg-transparent p-3 text-[110%] outline-none"
          type="text"
          placeholder="Search name..."
          value={searchedUserName}
          name="searchName"
        />
        <button onClick={handleSearch}>
          <FontAwesomeIcon
            icon={faSearch}
            className="ml-2 self-center text-[130%] font-bold text-C_GreyBorder"
          />
        </button>
      </div>
      {Object.keys(searchResult).length == 0 ? (
        <span className="mt-7">No matching results {':)'}</span>
      ) : (
        <div className="w-full overflow-y-scroll px-1 py-4">
          <Contact user={searchResult} />
        </div>
      )}
    </div>
  );
};

export default Search;
