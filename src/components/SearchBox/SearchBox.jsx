import { useDispatch, useSelector } from "react-redux";
import s from "./SearchBox.module.css";
import { selectNameFilter } from "../../redux/selectors";
import { changeFilter } from "../../redux/filtersSlice";

const SearchBox = () => {
  const filter = useSelector(selectNameFilter);

  const dispatch = useDispatch();

  return (
    <label className={s.label}>
      <span>Find contacts by name</span>
      <input
        className={s.field}
        onChange={(e) => {
          dispatch(changeFilter(e.target.value));
        }}
        value={filter}
        type="text"
      />
    </label>
  );
};

export default SearchBox;
