import React from "react";

const Resume = () => {
  return (
    <div className="resume">
      <div className="imgres">
        <a href="./Resume1.jpg" target="_blank">
          <img src="./Resume1.jpg" alt="" width={"25%"} />
        </a>
      </div>
      <div className="btndiv">
        <button>
          <a href="./Resume1.jpg" download="PrashanthCV.jpg">
            Download
          </a>
        </button>
      </div>
    </div>
  );
};

export default Resume;
