import React, { useEffect } from "react";
import { auth } from "../utils/firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { adduser, removeuser } from "../utils/Usersclice";
import { Logo, support_lang } from "../utils/Constant";
import { togglegptsearchview } from "../utils/Gptsclice";
import { chenglang } from "../utils/Configfile";

const Header = () => {
  const user = useSelector((state) => state.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const showgptsearch = useSelector((store) => store.gpt.showgptsearch);

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

    return () => unsubscribe();
  }, [dispatch, navigate]);

  const handalgptsearch = () => {
    dispatch(togglegptsearchview());
  };
  const handchanglang = (e) => {
    dispatch(chenglang(e.target.value));
  };

  return (
    <div className="absolute w-screen h-16 px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between">
      <img className="w-44" src={Logo} alt="Netflix Logo" />
      {user && (
        <div className="flex p-2">
          {showgptsearch && (
            <select
              className=" m-1  bg-gray-900 text-white"
              onChange={handchanglang}
            >
              {support_lang.map((lang) => (
                <option
                  key={lang.identifier}
                  value={lang.identifier}
                  name={lang.identifier}
                >
                  {lang.name}
                </option>
              ))}
            </select>
          )}
          <button
            className="w-24  px-1 rounded-lg bg-purple-800 text-white"
            onClick={handalgptsearch}
          >
            {showgptsearch?"homepage":"Gptsearch"}
            
          </button>
          <img
            className="w-15 h-15 rounded-full"
            src={user.photoURL}
            alt="User"
          />
          <button
            className="bg-red-500 h-7 w-20 rounded-lg mt-3 font-bold hover:bg-red-600"
            onClick={handleSignOut}
          >
            Sign out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
