import { useDispatch } from "react-redux";
import { setFocus } from "../../../redux/slices/focusedSlice";

const Input = (props) => {
  const {id} = props
  const dispatch = useDispatch();
  return (
    <input
      id={id}
      type="text"
      className="w-100 form-control search-form shadow-none"
      placeholder="Cari di Tokopedia"
      onFocus={() => dispatch(setFocus(true))}
      onBlur={() => dispatch(setFocus(false))}
    />
  );
};

export default Input;
