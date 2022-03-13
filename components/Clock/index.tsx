import { useState, useEffect } from 'react'
import useKeyPress from "../../hooks/useKeyPress.hook";
import { format } from "date-fns";

function Clock() {


  return <div className=" bg-gray-900 border border-solid border-blue-500 bg-opacity-50 flex flex-col align-middle justify-center h-full w-full content-center p-12 relative  rounded-xl">
<p className="text-2xl text-center mb-2  text-gray-50">
{new Date().toLocaleTimeString('en-US',{timeZone:'America/Los_Angeles'})}
</p>

              <p className="text-2xl text-center mb-2  text-gray-50">
                {format(new Date(), "EEEE")}
              </p>
              <p className="text-2xl text-center font-bold mt-2 text-gray-50">
                {format(new Date(), "MM/dd/yyyy")}
              </p>

  </div>
}

export default Clock
