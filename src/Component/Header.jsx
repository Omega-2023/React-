import React from "react";

function Header() {
  return (
    <header className="sticky">
      <nav
        className="w-full transparent flex flex-row 
                   justify-between px-5 items-center
                   md:px-20"
      >
        <div
          className="logo flex flex-row justify-center space-x-5 
                        items-center"
        >
          <img src="" alt="Logo" />
          <p className="text-white font-extrabold text-3xl">SuGa</p>
        </div>
        <button
          className="nav-button text-lightPink font-bold 
                     px-10 py-2 rounded-xl bg-white"
        >
          Log in
        </button>
      </nav>
    </header>
  );
}
export default Header;
