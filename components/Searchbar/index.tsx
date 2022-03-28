import { useState, useEffect } from "react";
import useKeyPress from "../../hooks/useKeyPress.hook";
import Search from "./Search";

function Searchbar() {
  const [term, setTerm] = useState("");

  function search() {
    const url = "https://www.google.com/search?q=";
    window.location.href = url + term;
  }

  const enterPress = useKeyPress("Enter");
  useEffect(() => {
    if (term !== "") search();
  }, [enterPress]);

  return (
    <div className=" bg-gray-900 border-4 border-solid border-gray-500 bg-opacity-50 flex flex-row align-middle h-full w-full content-center justify-self-center justify-center p-16 relative  rounded-xl">
      <input
        type="text"
        className="bg-gray-900 bg-opacity-50 hover:bg-opacity-75 align-middle text-white placeholder-gray-200 w-full
        rounded-lg outline-none  max-h-12 my-6 border-2 border-solid border-white focus:border-gray-500"
        style={{ textIndent: "0.5rem" }}
        placeholder="Enter Search Query"
        onChange={(e) => setTerm(e.target.value.split(" ").join("+"))}
        onSubmit={search}
      />

      <button
        className=" my-6 mx-3 px-3  max-h-12 p-1 border-2 border-solid border-white hover:border-gray-500 text-center align-middle rounded-lg
      text-pink-300 font-medium"
        onClick={search}
      >
        <Search />
      </button>
    </div>
  );
}

export default Searchbar;
