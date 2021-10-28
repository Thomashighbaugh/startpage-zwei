import { useState } from "react";
import { format } from "date-fns";
import NewsList from "../components/NewsFeed";
import ShortCuts from "../components/Bookmarks";
import Weather from "../components/Weather";
import Quotes from "../components/Quotes";
import Searchbar from "../components/Searchbar";
import Clock from "../components/Clock";
const Startpage = ({ weatherInfo }) => {

  return (
    <div
      className="flex flex-col h-full w-full p-36"
    >


        <div className="bg-gray-900 border-2 border-solid border-blue-500 bg-opacity-90 mb-4 rounded-xl p-8 text-3xl text-gray-50 text-center">
        Startpage Zwei
        </div>
      <div className="lg:space-x-8 flex flex-col lg:flex-row">
        <div className="lg:w-1/2 w-full lg:flex lg:flex-col lg:space-y-4">
          <div className="lg:space-x-4 lg:flex lg:flex-row">
            <div
              className="lg:w-1/2  my-2 bg-gray-900 border-2 border-solid border-blue-500 bg-opacity-90 rounded-xl flex flex-col"
            
            >
            <Clock/>
            </div>
            <div
              className="lg:w-1/2 my-2 h-48 bg-gray-900 border-2 border-solid border-blue-500 bg-opacity-90 rounded-xl flex flex-col"

            >
              <Weather weatherInfo={weatherInfo} />
            </div>
          </div>
          <div
            className="w-full h-48 bg-gray-900 bg-opacity-90 rounded-xl"
            
          ><Searchbar/></div>
        </div>
        <div className="lg:w-1/3 w-full ">
          <NewsList />
        </div>
        <div className="lg:w-1/6 w-full">
          <ShortCuts />
        </div>
      </div>
<Quotes/>
    </div>
  );
};

export default Startpage;

export async function getServerSideProps(context: any) {
  const protocol: string = context.req.headers["x-forwarded-proto"] || "http";
  const baseURL: string = context.req
    ? `${protocol}://${context.req.headers.host}`
    : "";

  const rawWeatherInfo = await fetch(baseURL + "/api/weather");
  const weatherInfo = await rawWeatherInfo.json();

  return {
    props: {
      weatherInfo,
    },
  };
}
