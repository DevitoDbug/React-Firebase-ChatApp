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
  or,
} from 'firebase/firestore';
import { db } from '../firebase';

const Search = () => {
  const [, setSearchOpen] = useContext(SearchContext);
  const [searchedUserName, setSearchedUserName] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleCloseSearch = () => {
    setSearchOpen(false);
    setSearchResults([]);
  };

  const handleSearch = async () => {
    const q = query(
      collection(db, 'users'),
      // eslint-disable-next-line no-undef
      or(
        where('firstName', '==', searchedUserName),
        where('lastName', '==', searchedUserName),
      ),
    );

    try {
      //Searching for a user from firebase
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        console.log(doc.id, ' => ', doc.data());
        setSearchResults((previous) => [...previous, doc.data()]);
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
          onChange={(e) => {
            setSearchedUserName(e.target.value);
            setSearchResults([]);
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
      {searchResults.length <= 0 && (
        <span className="mt-7">No matching results found</span>
      )}
      {searchResults.length > 0 && (
        <div className="w-full overflow-y-scroll px-1 py-4">
          {searchResults.map((searchResult, index) => (
            <Contact key={index} user={searchResult} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Search;
