import React from "react";

const Button = ({ btnText, btnType, btnIcon }) => {
  return (
    <>
      <button className={`${btnType}  btn`}>
        {btnText}
        {btnIcon}
      </button>
    </>
  );
};

export default Button;
