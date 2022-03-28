import NewsList from "../components/NewsFeed";
import ShortCuts from "../components/Bookmarks";
import Weather from "../components/Weather";
import Quotes from "../components/Quotes";
import Searchbar from "../components/Searchbar";
import Clock from "../components/Clock";
import Menu from "../components/Menu";

const Startpage = ({ weatherInfo }) => {
  return (
    <body className="min-w-full min-h-full p-0 m-0 place-content-stretch">
      <div className="flex flex-col h-full w-full pl-24 pr-24 pt-12 pb-3 z-50">
        <div className="bg-gray-900 border-4 border-solid border-gray-500 bg-opacity-90 lg:mb-4  rounded-xl p-12 lg:text-5xl text-3xl text-gray-50 text-center">
          Welcome to the Internet
        </div>
        <div className="lg:space-x-8 flex flex-col lg:flex-row">
          <div className="lg:w-1/2 w-full lg:flex lg:flex-col lg:space-y-4">
            <div className="lg:space-x-4 lg:flex lg:flex-row">
              <div className="lg:w-1/2  my-2 bg-gray-900 border-4 border-solid border-gray-500 bg-opacity-90 rounded-xl flex flex-col">
                <Clock />
              </div>
              <div className="lg:w-1/2 my-2 bg-gray-900 border-4 border-solid border-gray-500 bg-opacity-90 rounded-xl flex flex-col justify-center content-center items-center">
                <Weather weatherInfo={weatherInfo} />
              </div>
            </div>
            <div className="w-full h-54 bg-gray-900 bg-opacity-90 rounded-xl">
              <Searchbar />
            </div>
          </div>
          <div className="lg:w-1/3 w-full ">
            <NewsList />
          </div>
          <div className="lg:w-1/6 w-full">
            <ShortCuts />
          </div>
        </div>
        <Quotes />
      </div>
    </body>
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
      weatherInfo
    }
  };
}
