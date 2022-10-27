import { useEffect, useState } from "react";
import { useLocation, useNavigate, useSearchParams } from "react-router-dom";
import { LINK_HOME, SEARCH_ID } from "../constants";
import style from "../Styles/Searchbar.module.css";

const Searchbar = () => {
  const [searchvalue, setsearch] = useState<string>("");
  const navigate = useNavigate();
  const [params, setparams] = useSearchParams();
  const { search } = useLocation();
  function Pressed() {
    navigate({
      pathname: LINK_HOME,
      search: searchvalue.length !== 0 ? "?s=" + searchvalue : "",
    });
  }

  useEffect(() => {
    (document.getElementById(SEARCH_ID) as HTMLInputElement).value =
      params.get("s")!;
  }, [search]);

  return (
    <div>
      <input
        className={style.searchbar}
        type="search"
        id={SEARCH_ID}
        onChange={(e) => setsearch(e.target.value)}
        onKeyDown={(e) => {
          if (e.code === "Enter") {
            Pressed();
          }
        }}
      />
    </div>
  );
};

export default Searchbar;
