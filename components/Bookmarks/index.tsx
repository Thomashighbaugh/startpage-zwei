import Github from './Github';
import Reddit from './Reddit';
import Mailbox from './Mailbox';

const ShortCuts = () => (
  <div className="bg-gray-900 w-full  border-2 border-solid border-blue-500 bg-opacity-90 rounded-xl min-h-full justify-center content-center items-center pl-12 align-middle p-2">
    <Github/>
    <Reddit/>
    <Mailbox/>

  </div>
);

export default ShortCuts;
