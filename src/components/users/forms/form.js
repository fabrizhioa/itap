import React from "react";

const Form = ({ children, className, action }) => {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        console.log("Send form!");
        if(action) action();
      }}
      className={"grid auto-rows-max flex-wrap gap-3 w-2/4 "+className}
    >
      {children}
    </form>
  );
};

export default Form;
