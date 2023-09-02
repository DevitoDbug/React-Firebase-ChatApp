import React, { useContext } from 'react';
import { SearchContext } from '../context/SearchContext';
import {
  collection,
  doc,
  getDoc,
  getDocs,
  query,
  serverTimestamp,
  setDoc,
  updateDoc,
  where,
} from 'firebase/firestore';
import { db } from '../firebase';
import { LoginContext } from '../context/AuthContext';

const Contact = ({ user }) => {
  const [, setSearchPanelOpen] = useContext(SearchContext);
  const { currentUser } = useContext(LoginContext);

  const handleSelect = async () => {
    setSearchPanelOpen(false);
    const combinedId =
      currentUser.uid > user.uid
        ? currentUser.uid + user.uid
        : currentUser.uid + user.uid;

    //Getting info about the currently loged in  user
    let currentUserDetails;
    const q = query(
      collection(db, 'users'),
      where('firstName', '==', currentUser.displayName),
    );

    try {
      //Searching for a user from firebase
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        currentUserDetails = doc.data();
      });
    } catch (e) {
      console.log('Fetching data from firestore error: ', e);
    }

    //Checking if there exist a chat between user and selected contact
    //Also check if user is trying to make a chat to himself
    const docRef = doc(db, 'chats', combinedId);
    const docSnap = await getDoc(docRef);
    if (!docSnap.exists() && user.uid != currentUser.uid) {
      //create that chat
      await setDoc(doc(db, 'chats', combinedId), { message: [] });
      //Adding user to userChats for both communicators
      try {
        await updateDoc(
          doc(db, 'userChats', currentUserDetails.uid),
          {
            [combinedId + '.userInfo']: {
              uid: user.uid,
              firstName: user.firstName,
              secondName: user.secondName,
            },
            [combinedId + '.date']: serverTimestamp(),
          },
        );
      } catch (error) {
        console.log(error);
      }
      try {
        await updateDoc(doc(db, 'userChats', user.uid), {
          [combinedId + '.userInfo']: {
            uid: currentUserDetails.uid,
            firstName: currentUserDetails.firstName,
            secondName: currentUserDetails.secondName,
          },
          [combinedId + '.date']: serverTimestamp(),
        });
      } catch (error) {
        console.log(error);
      }
    }
  };
  return (
    <div
      onClick={handleSelect}
      className="flex h-20 w-full flex-row items-center justify-between rounded-xl bg-C_DarkBlue p-2 shadow-lg shadow-C_DarkBlueShadow"
    >
      <div className="flex flex-row gap-2">
        <img
          src={user.photoURL}
          alt=""
          className="h-14 w-14 rounded-full border-2 border-C_Gold object-cover "
        />
        <div className="flex flex-col justify-center">
          <span className="text-xs font-semibold text-C_TextWhite">
            {user.firstName} {user.secondName}
          </span>
          <span className="text-[0.625rem] font-light text-C_TextWhiteDull ">
            Thank you
          </span>
        </div>
      </div>
      <div className="text-[0.625rem] font-normal text-C_TextWhite ">
        12/45/2002
      </div>
    </div>
  );
};

export default Contact;
