import {
  faMicrophoneAlt,
  faPaperPlane,
  faPaperclip,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const InputArea = () => {
  return (
    <div>
      <div className="w-full resize-y h-auto bg-C_WhiteBright p-1 border-2 border-C_GreyBorder flex flex-row gap-2 justify-aroun items-center rounded-lg">
        <div className="flex items-center justify-center gap-1">
          <FontAwesomeIcon
            icon={faPaperclip}
            className="ml-2 text-C_UserDullBlack text-xl"
          />
          <FontAwesomeIcon
            icon={faMicrophoneAlt}
            className="ml-2 text-C_UserDullBlack text-xl"
          />
        </div>
        <textarea
          className="w-[70%] outline-none resize-y h-auto justify-end"
          placeholder="Type new message..."
          type="text"
        />
        <FontAwesomeIcon
          icon={faPaperPlane}
          className=" text-C_UserDullBlack text-xl justify-end"
        />
      </div>
    </div>
  );
};

export default InputArea;
