
import quotes from "../../data/quotes";
import { useState } from "react";
const Quotes = () => {
      const [quote] = useState<{ text: string; author: string }>(
    quotes[Math.floor(Math.random() * quotes.length)]
  );
  return (

        <div className=" bg-gray-900 border-4 border-solid border-gray-500 bg-opacity-90 lg:mt-4 mt-2 rounded-xl p-12">
      <p className="mx-auto mb-0 leading-none font-medium text-xl italic text-gray-50 ">
        {quote?.text}
      </p>
      <hr/>
      <p className="mx-auto leading-none text-lg  italic text-gray-400 mt-2">
        {quote?.author}
      </p>
      </div>
  )
};

export default Quotes;