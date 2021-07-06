import CoinGecko from "./cg";

export default function Crypto() {
  return (
    <div className="mb-5 xl:mb-0  align-middle bg-opacity-50 hover:bg-opacity-75 bg-gray-900 row-span-3 col-span-3
     xl:col-span-1 px-4 py-4 rounded-xl order-last xl:order-first">
      <h2 className="text-center text-gray-50 text-3xl mb-12">
        Exchange Leaderboard
      </h2>
      <CoinGecko />{" "}
    </div>
  );
}
