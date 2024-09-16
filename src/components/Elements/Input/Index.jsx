import { useDispatch } from "react-redux";
import { setFocus } from "../../../redux/slices/focusedSlice";

const Input = (props) => {
  const {id, placeholder, customClass, onchange, isFocus} = props
  const dispatch = useDispatch();
  return (
    <input
      id={id}
      type="text"
      className={`w-100 form-control shadow-none ${customClass}`}
      placeholder={placeholder}
      onFocus={() => dispatch(setFocus(true))}
      onBlur={() => dispatch(setFocus(false))}
      autoFocus={isFocus}
      onChange={onchange}
    />
  );
};

export default Input;
