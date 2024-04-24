import React, { useEffect } from 'react';
import { auth } from '../utils/firebase';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { adduser, removeuser } from '../utils/Usersclice';
import { Logo } from '../utils/Constant';

const Header = () => {
  const user = useSelector(state => state.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        navigate("/error-page");
      });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(adduser({ uid, email, displayName, photoURL }));
        navigate("/browse");
      } else {
        dispatch(removeuser());
        navigate("/");
      }
    });

    return () => unsubscribe(); // Cleanup function
  }, [dispatch, navigate]); // Depend on dispatch and navigate

  return (
    <div className='absolute w-screen h-16 px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between'>
      <img className='w-44' src={Logo} alt="Netflix Logo" />
      {user && (
        <div className='flex'>
          <img className='w-15 h-15 rounded-full' src={user.photoURL} alt="User" />
          <button className='bg-red-500 h-7 w-20 rounded-lg mt-3 font-bold hover:bg-red-600' onClick={handleSignOut}>Sign out</button>
        </div>
      )}
    </div>
  );
};

export default Header;
