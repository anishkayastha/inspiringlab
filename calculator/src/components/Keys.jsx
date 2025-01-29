import React from "react";

const Keys = ({ label, keyClass, onButtonClick }) => {
  const equalClass =
    "col-[span_2] !bg-yellow-600 font-semibold hover:!bg-yellow-700";
  return (
    <div
      className={`bg-sky-900 flex cursor-pointer items-center justify-center p-4 rounded-[5px] hover:bg-sky-950 ${
        keyClass && equalClass
      }`}
      onClick={() => onButtonClick(label)}
    >
      {label}
    </div>
  );
};

export default Keys;
