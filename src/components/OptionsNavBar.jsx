import {
  faSearch,
  faStar,
  faUser,
  faUserGroup,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const OptionsNavBar = () => {
  return (
    <div className="w-full p-2 border-C_BorderLightBlue border-t-2 flex flex-row items-center justify-center gap-1">
      <button>
        <FontAwesomeIcon
          icon={faUser}
          className="ml-2 text-C_UserDullBlack text-xl"
        />
      </button>
      <button>
        <FontAwesomeIcon
          icon={faUserGroup}
          className="ml-2 text-C_UserDullBlack text-xl"
        />
      </button>
      <button>
        <FontAwesomeIcon
          icon={faStar}
          className="ml-2 text-C_UserDullBlack text-xl"
        />
      </button>
      <button>
        <FontAwesomeIcon
          icon={faSearch}
          className="ml-2 text-C_UserDullBlack text-xl"
        />
      </button>
    </div>
  );
};

export default OptionsNavBar;
