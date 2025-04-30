import React from "react";

const Loading = ({ message }: { message: string }) => {
  return (
    <div className="loading-wrapper">
      <div className="spinner"></div>
      <p className="loading-text">{message}</p>
    </div>
  );
};

export default Loading;
