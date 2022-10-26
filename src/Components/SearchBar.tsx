import { useEffect, useState } from "react";
import { useLocation, useNavigate, useSearchParams } from "react-router-dom";
const Searchbar = () => {
  const [searchvalue, setsearch] = useState<string>("");
  const navigate = useNavigate();
  const [params, setparams] = useSearchParams();
  const { search } = useLocation();
  function Pressed() {
    navigate({
      pathname: "/home",
      search: searchvalue.length !== 0 ? "?s=" + searchvalue : "",
    });
  }

  useEffect(() => {
    console.log("changed");
    (document.getElementById("search") as HTMLInputElement).value =
      params.get("s")!;
  }, [search]);

  return (
    <div>
      <input
        style={{
          width: "90%",
          height: "70px",
          margin: " 50px",
          fontSize: "36px",
        }}
        type="search"
        name=""
        id="search"
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
