import {
  faMessage,
  faSearch,
  faStar,
  faUserGroup,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { useContext } from 'react';
import { SearchContext } from '../context/SearchContext';

const OptionsNavBar = ({ scrollToMessageSection }) => {
  const [, setSearchOpen] = useContext(SearchContext);
  const handleOpenSearch = () => {
    setSearchOpen(true);
  };

  return (
    <div className="flex w-full flex-row items-center justify-center gap-1 border-t-2 border-C_BorderLightBlue p-2">
      <button>
        <FontAwesomeIcon
          icon={faUserGroup}
          className="ml-2 text-xl text-C_UserDullBlack"
        />
      </button>
      <button>
        <FontAwesomeIcon
          icon={faMessage}
          className="ml-2 text-xl text-C_UserDullBlack"
          onClick={() => {
            scrollToMessageSection();
          }}
        />
      </button>
      <button>
        <FontAwesomeIcon
          icon={faStar}
          className="ml-2 text-xl text-C_UserDullBlack"
        />
      </button>
      <button onClick={handleOpenSearch}>
        <FontAwesomeIcon
          icon={faSearch}
          className="ml-2 text-xl text-C_UserDullBlack"
        />
      </button>
    </div>
  );
};

export default OptionsNavBar;
