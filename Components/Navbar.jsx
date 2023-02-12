import { Notification, Profile, Search } from "@/assets";
import Image from "next/image";
import React from "react";

const Navbar = () => {
  return (
    <div className="flex justify-between py-5 border-b-2 px-7">
      <h1 className="text-xl font-bold">Dashboard</h1>
      <div className="flex items-center space-x-7">
        <label className="relative">
          <input
            type="search"
            name="search"
            placeholder="Search..."
            className="px-2 py-1 bg-white border rounded-lg focus:border-blue-500"
          />
          <Image src={Search} className="absolute w-4 top-2 right-2" />
        </label>
        <button>
          <Image src={Notification} />
        </button>
        <button>
          <Image src={Profile} />
        </button>
      </div>
    </div>
  );
};

export default Navbar;
