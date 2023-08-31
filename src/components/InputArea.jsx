import {
  faMicrophoneAlt,
  faPaperPlane,
  faPaperclip,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const InputArea = () => {
  return (
    <div>
      <div className="justify-aroun flex h-auto w-full resize-y flex-row items-center gap-2 rounded-lg border-2 border-C_GreyBorder bg-C_WhiteBright p-1">
        <div className="flex items-center justify-center gap-1">
          <FontAwesomeIcon
            icon={faPaperclip}
            className="ml-2 text-xl text-C_UserDullBlack"
          />
          <FontAwesomeIcon
            icon={faMicrophoneAlt}
            className="ml-2 text-xl text-C_UserDullBlack"
          />
        </div>
        <textarea
          className="h-auto w-[70%] resize-y justify-end outline-none"
          placeholder="Type new message..."
          type="text"
        />
        <FontAwesomeIcon
          icon={faPaperPlane}
          className=" justify-end text-xl text-C_UserDullBlack"
        />
      </div>
    </div>
  );
};

export default InputArea;
