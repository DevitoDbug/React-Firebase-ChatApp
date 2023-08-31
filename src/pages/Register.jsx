import { faImage } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";

import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth, db, storage } from "../firebase";

import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { doc, setDoc } from "firebase/firestore";
import { Link, useNavigate } from "react-router-dom";

const Register = () => {
  const [error, setError] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsTyping(false);

    //data from the form
    const fname = e.target[0].value;
    const sname = e.target[1].value;
    const email = e.target[2].value;
    const password = e.target[3].value;
    const file = e.target[4].files[0];

    try {
      const res = await createUserWithEmailAndPassword(auth, email, password);
      console.log(res);

      const storageRef = ref(storage, fname);

      const uploadTask = uploadBytesResumable(storageRef, file);

      uploadTask.on(
        (error) => {
          console.log("There  was a failure on the upload\n ERROR: ", error);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
            //updating user profile
            await updateProfile(res.user, {
              displayName: fname,
              photoURL: downloadURL,
            });

            //adding the user to the users collection
            try {
              await setDoc(doc(db, "users", res.user.uid), {
                uid: res.user.uid,
                firstName: fname,
                secondName: sname,
                email,
                photoURL: downloadURL,
              });
            } catch (e) {
              console.log("Adding user to user collection error:\n", e);
            }

            //user chats
            try {
              await setDoc(doc(db, "chats", res.user.uid), {});
            } catch (e) {
              console.log(e);
            }
          });
        },
      );

      navigate("/");
    } catch (e) {
      setError(e);
    }
  };
  return (
    <form
      onSubmit={handleSubmit}
      className="text-lg w-full h-full bg-C_LightBlue flex  flex-col gap-3 items-center justify-center md:w-[60%] md:h-[50%] md:rounded-xl md:gap-3 md:shadow-xl  lg:w-[30%] lg:h-[70%] "
    >
      <h2 className="text-C_TextBlack text-xl md:text-2xl lg:text-lg">
        Register
      </h2>
      <input
        onChange={() => setIsTyping(true)}
        className="w-[70%] p-3 rounded-md outline-C_DarkBlue md:w-[80%] md:text-2xl lg:text-lg lg:p-2"
        type="text"
        placeholder="First Name"
        name="id"
      />
      <input
        onChange={() => setIsTyping(true)}
        className="w-[70%] p-3 rounded-md outline-C_DarkBlue md:w-[80%] md:text-2xl lg:text-lg lg:p-2"
        type="text"
        placeholder="Last Name"
        name="id"
      />
      <input
        onChange={() => setIsTyping(true)}
        className="w-[70%] p-3 rounded-md outline-C_DarkBlue md:w-[80%] md:text-2xl lg:text-lg lg:p-2"
        type="text"
        placeholder="Email"
        name="id"
      />
      <input
        onChange={() => setIsTyping(true)}
        className="w-[70%] p-3 rounded-md outline-C_DarkBlue md:w-[80%] md:text-2xl lg:text-lg lg:p-2"
        type="password"
        placeholder="Password"
        name="id"
      />

      <input
        onChange={() => setIsTyping(true)}
        id="file"
        type="file"
        className="hidden"
      />
      <label
        className="flex flex-row items-center cursor-pointer"
        htmlFor="file"
      >
        <FontAwesomeIcon
          icon={faImage}
          className="text-C_DarkBlue text-[150%] p-1"
        />
        <span className="text-[80%] text-C_TextBlack">Add profile pic</span>
      </label>

      <button className="text-2xl text-C_TextWhite bg-C_DarkBlue shadow-lg py-2 px-3 rounded-xl md:text-3xl md:mt-3 lg:text-xl lg:mt-3">
        Register
      </button>
      <div className="text-sm">
        You have an account?
        <Link className="text-C_DarkBlue  text-sm font-bold ml-1" to={"/login"}>
          Log in
        </Link>
      </div>
      {error.length > 0 && (
        <span className="text-sm text-red-600">{error}</span>
      )}
    </form>
  );
};

export default Register;
