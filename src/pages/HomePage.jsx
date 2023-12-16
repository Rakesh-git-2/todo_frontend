import React from "react";
import Todo from "../parts/Todo";
import { logout } from "../services/api";

import "./pages.css";

const handleLogout = () => {
  logout();
};

function HomePage() {
  return (
    <div className="relative w-full min-h-screen bg-top bg-no-repeat bg-contain bg-bg-light dark:bg-bg-dark">
      {/* desktop light */}
      <img
        src="/images/bg-desktop-light.jpg"
        alt="image light"
        className="absolute z-0 hidden object-cover w-full dark:opacity-0 sm:block"
        style={{ height: "300px" }}
      />

      {/* desktop dark */}
      <img
        src="/images/bg-desktop-dark.jpg"
        alt="image light"
        className="absolute z-0 hidden object-cover w-full opacity-0 dark:opacity-100 sm:block"
        style={{ height: "300px" }}
      />

      {/* mobile light */}
      <img
        src="/images/bg-mobile-light.jpg"
        alt="image light"
        className="absolute z-0 object-cover w-full opacity-100 dark:opacity-0 sm:hidden "
        style={{ height: "200px" }}
      />

      <img
        src="/images/bg-mobile-dark.jpg"
        alt="image light"
        className="absolute z-0 object-cover w-full opacity-0 dark:opacity-100 sm:hidden"
        style={{ height: "200px" }}
      />
      <div
        onClick={handleLogout}
        className="fixed flex justify-center gap-2 items-center right-2 top-2 text-zinc-300 cursor-pointer"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M5.636 5.636a9 9 0 1012.728 0M12 3v9"
          />
        </svg>
        <span>Logout</span>
      </div>

      <Todo />
    </div>
  );
}

export default HomePage;
