import React from "react";
import welcome from "../styles/welcome.css";
import searchbar from "../styles/searchbar.css";
export default function Navbar({ search, setInputValue, setIsLoading }) {
  return (
    <div>
      <h2 className="welcome">Welcome To Movie App</h2>

      <input
        type={"text"}
        onChange={(e) => {
          setInputValue(e.target.value);
        }}
        onKeyPress={search}
        placeholder="Enter the Movie Name"
        className="search_baar"
      ></input>
    </div>
  );
}
