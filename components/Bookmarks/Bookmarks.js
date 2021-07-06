import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Bookmark } from "./Bookmark";
import {
  faGithub,
  faSpotify,
  faCodepen,
  faReddit,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import {
  FaGithub,
  FaSpotify,
  FaCodepen,
  FaReddit,
  FaLinux,
  FaCalendar,
  FaMailBulk,
} from "react-icons/fa";

function Bookmarks() {
  return (
    <div className="bg-gray-900 bg-opacity-50 flex flex-col text-white rounded-xl p-6 mb-6 xl:col-span-2 col-span-3 xl:row-span-1 row-span-3">
      <div className="grid grid-col-4  grid-flow-col justify-center">
        <a href="https://github.com/Thomashighbaugh">
          <FaGithub
            size={96}
            className="bg-gray-800 m-3 p-2 bg-opacity-25 hover:bg-opacity-50 
           rounded-xl border border-solid text-white border-gray-500  
       hover:text-gray-200  xl:col-span-1 "
          />
        </a>
        {/* Originaly the solution was more elegant, but I spent enough time trying to get the icons to size correctly, this will work for the time being */}
        <a href="https://spotify.com">
          <FaSpotify
            size={96}
            className="bg-gray-800 m-3 p-2 bg-opacity-25 hover:bg-opacity-50  rounded-xl
        border border-solid text-white border-gray-500  fa-sm
       hover:text-gray-200  xl:col-span-1"
          />
        </a>
        {/* 
        // ##################################################################### //
        // ##################################################################### //
        // ##################################################################### // 
*/}
        <a href="https://codepen.io">
          <FaCodepen
            size={96}
            className="bg-gray-800 m-3 p-2 bg-opacity-25 hover:bg-opacity-50  rounded-xl
        border border-solid text-white border-gray-500  
       hover:text-gray-200  xl:col-span-1"
          />
        </a>
        {/* 
        // ##################################################################### //
        // ##################################################################### //
        // ##################################################################### // 
*/}

        <a href="https://reddit.com">
          {" "}
          <FaReddit
            size={96}
            className="bg-gray-800 m-3 p-2 bg-opacity-25 hover:bg-opacity-50  rounded-xl
        border border-solid text-white border-gray-500  fa-sm
       hover:text-gray-200  xl:col-span-1"
          />
        </a>
        <FaLinux
          size={96}
          className="bg-gray-800 m-3 p-2 bg-opacity-25 hover:bg-opacity-50  rounded-xl
        border border-solid text-white border-gray-500  fa-sm
       hover:text-gray-200  xl:col-span-1"
        >
          <Bookmark url="https://reddit.com/r/unixporn" />
        </FaLinux>

        <FaCalendar
          size={96}
          className="bg-gray-800 m-3 p-2 bg-opacity-25 hover:bg-opacity-50  rounded-xl
        border border-solid text-white border-gray-500  fa-sm
       hover:text-gray-200  xl:col-span-1"
        >
          <Bookmark url="https://calendar.google.com/calendar/u/0/r?pli=1" />
        </FaCalendar>
        <FaMailBulk
          size={96}
          className="bg-gray-800 m-3 p-2 bg-opacity-25 hover:bg-opacity-50  rounded-xl
        border border-solid text-white border-gray-500  fa-sm
       hover:text-gray-200  xl:col-span-1"
        >
          <Bookmark url="https://zoho.com" />
        </FaMailBulk>
      </div>
    </div>
  );
}

export default Bookmarks;
