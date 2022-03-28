import Github from "./Github";
import Reddit from "./Reddit";
import Mailbox from "./Mailbox";
import Spotify from "./Spotify";
import Dribbble from "./Dribbble";
import Instagram from "./Instagram";

const ShortCuts = () => (
  <div className="flex flex-row w-full justify-around content-around items-around place-content-around  border-solid py-16 border-gray-500 bg-opacity-90 border-4 bg-gray-900  rounded-xl  ">
    <div className=" flex flex-col flex- min-h-full justify-around content-around items-around place-content-stretch align-middle p-4">
      <Github />
      <Reddit />
      <Mailbox />
    </div>
    <div className=" flex flex-col min-h-full justify-around content-around items-around  place-content-stretch align-middle p-4">
      <Spotify />
      <Dribbble />
      <Instagram />
    </div>
  </div>
);

export default ShortCuts;
