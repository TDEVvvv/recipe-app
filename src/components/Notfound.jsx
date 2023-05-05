import React from "react";
import awkward from "../awkward.gif";
const Notfound = () => {
  return (
    <div className="w-full h-screen flex flex-col items-center ">
      <h1 className="text-center text-7xl font-spartan font-bold text-black">
        Recipe not found
      </h1>
      <img src={awkward} alt="awkward" className=" w-[600px] rounded-md" />
    </div>
  );
};

export default Notfound;
