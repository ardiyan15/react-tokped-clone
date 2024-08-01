import { useState } from "react";
const Input = (props) => {
  const [isFocused, setIsFocused] = useState(false);

//   const focusHandler = () => {
//     setIsFocused((prevState) => !prevState);
//   };

    const { focusHandler } = props;
    console.log(focusHandler)
  return (
    <input
      id="search-form"
      type="text"
      className="w-100 form-control search-form shadow-none"
      placeholder="Cari di Tokopedia"
        onFocus={focusHandler}
        onBlur={focusHandler}
    />
  );
};

export default Input;
