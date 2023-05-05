import React from "react";
import loading from "../loading.gif";
const Loading = () => {
  return (
    <div className="h-screen w-full text-center">
      <img src={loading} alt="loading" className="mx-auto" />
    </div>
  );
};

export default Loading;
