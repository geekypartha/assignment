import React, { useEffect, useRef } from 'react'
import SearchIcon from "@mui/icons-material/Search";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import "./searchBar.css";
import { useNavigate } from 'react-router-dom';

const ExplorePage = () => {
    const navigate = useNavigate();

    const searchBoxRef = useRef(null);

    useEffect(() => {
    if (searchBoxRef.current) {
        searchBoxRef.current.focus();
    }
    }, []);

  return (
    <div>
      <div className="flex item-center justify-center px-10">
        <div className="flex items-center w-full gap-5 pt-3">
          <div onClick={() => navigate("/hero")}>
            <ArrowBackIosIcon />
          </div>
          <form>
            <input
              ref={searchBoxRef}
              id="searchQueryInput"
              type="text"
              name="searchQueryInput"
              placeholder="Search"
            />
            <button
              className="pr-10"
              id="searchQuerySubmit"
              type="submit"
              name="searchQuerySubmit"
            >
              <SearchIcon />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ExplorePage