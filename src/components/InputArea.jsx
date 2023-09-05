import {
  faMicrophoneAlt,
  faPaperPlane,
  faPaperclip,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useContext, useState } from 'react';
import { doc, updateDoc, arrayUnion } from 'firebase/firestore';
import { db } from '../firebase';
import { ChatContext } from '../context/ChatContext';

const InputArea = () => {
  const { data } = useContext(ChatContext);
  console.log(data);
  const [text, setText] = useState('');
  const [img, setImage] = useState(null);

  const handleSend = async () => {
    if (img) {
      //img
    } else {
      await updateDoc(doc(db, 'chats', data.combinedId), {
        regions: arrayUnion('greater_virginia'),
      });
    }
  };

  return (
    <div>
      <div className="justify-aroun absolute flex h-auto w-full resize-y flex-row items-center gap-2 rounded-lg border-2 border-C_GreyBorder bg-C_WhiteBright p-1">
        <div className="flex items-center justify-center gap-1">
          <input
            onChange={(e) => setImage(e.target.files[0])}
            type="file"
            name="image"
            className="hidden"
          />
          <label htmlFor="image">
            <FontAwesomeIcon
              icon={faPaperclip}
              className="ml-2 text-xl text-C_UserDullBlack"
            />
          </label>
          <FontAwesomeIcon
            icon={faMicrophoneAlt}
            className="ml-2 text-xl text-C_UserDullBlack"
          />
        </div>
        <textarea
          onChange={(e) => setText(e.target.value)}
          className="h-auto w-[70%] resize-none justify-end outline-none"
          placeholder="Type new message..."
          onInput={(e) => {
            e.target.style.height = 'auto';
            e.target.style.height = `${e.target.scrollHeight}px`;
          }}
          type="text"
          value={text}
        />
        <button onClick={handleSend}>
          <FontAwesomeIcon
            icon={faPaperPlane}
            className=" relative right-2 justify-end text-xl text-C_UserDullBlack"
          />
        </button>
      </div>
    </div>
  );
};

export default InputArea;
