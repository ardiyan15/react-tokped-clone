import { useDispatch } from "react-redux";
import { setFocus } from "../../../redux/slices/focusedSlice";

const Input = (props) => {
  const { id, name, placeholder, customClass, onchange, isFocus } = props;
  const dispatch = useDispatch();

  const handleFocusHeader = (isFocus) => {
    if (isFocus) {
      dispatch(setFocus(false));
    } else {
      dispatch(setFocus(true));
    }
  };

  return (
    <input
      id={id}
      type="text"
      name={name}
      className={`w-100 form-control shadow-none ${customClass}`}
      placeholder={placeholder}
      onFocus={() => handleFocusHeader(isFocus)}
      onBlur={() => handleFocusHeader(isFocus)}
      autoFocus={isFocus}
      onChange={onchange}
    />
  );
};

export default Input;
