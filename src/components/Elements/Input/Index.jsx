import { useDispatch } from "react-redux";
import { setFocus } from "../../../redux/slices/focusedSlice";

const Input = () => {
  const dispatch = useDispatch();
  return (
    <input
      id="search-form"
      type="text"
      className="w-100 form-control search-form shadow-none"
      placeholder="Cari di Tokopedia"
      onFocus={() => dispatch(setFocus(true))}
      onBlur={() => dispatch(setFocus(false))}
    />
  );
};

export default Input;
