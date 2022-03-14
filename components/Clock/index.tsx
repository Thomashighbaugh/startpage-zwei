import { useState, useEffect } from "react";
import useKeyPress from "../../hooks/useKeyPress.hook";
import { format } from "date-fns";

function Clock() {
  return (
    <div className=" bg-gradient-to-rfrom-gray-900 to-gray-600  bg-opacity-10 flex flex-col align-middle justify-center h-full w-full content-center p-12 relative  rounded-xl">
     {/* Day of the week */}
      <p className="text-3xl text-center mb-1 text-gray-50">
        {format(new Date(), "EEEE")}
      </p>
      <hr/>
{/* Time */}
      <p className="text-3xl text-center mb-1  text-gray-50">
        {new Date().toLocaleTimeString("en-US", {
          timeZone: "America/Los_Angeles"
        })}
      </p>
      <br/>
      
{/* Long form date */}
      <p className="text-xl text-center font-bold mt-2 text-gray-50">
        {format(new Date(), "MM/dd/yyyy")}
      </p>
    
    </div>
  );
}

export default Clock;
