import React from "react";
import "../App.css";

const IsLoading = () => {
  return (
    <div className="load-wrapp">
      <div className="load-7">
        <p>Loading ...</p>
        <div className="square-holder">
          <div className="square"></div>
        </div>
      </div>
    </div>
  );
};

export default IsLoading;
