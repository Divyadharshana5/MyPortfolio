import React from "react";

export default function Header() {
  return (
    <div className="flex justify-between px-10 py-5 bg-black items-center text-white  ">
      <p>Header</p>
      <button className="border border-white px-4 hover:bg-gray-100 hover:text-black py-2 rounded-lg">
        Login
      </button>
    </div>
  );
}
