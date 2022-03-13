const shortCuts = [
  {
    title: "Github",
    url: "https://github.com/Thomashighbaugh",
    icon: "icons/github.svg",
  },
  {
    title: "Reddit",
    url: "https://reddit.com",
    icon: "icons/reddit.svg",
  },
  {
    title: "Zoho Mail",
    url: "https://zoho.com",
    icon:
      "icons/mailbox.svg",
  },
];

const ShortCuts = () => (
  <div className="bg-gray-900 w-full  border-2 border-solid border-blue-500 bg-opacity-90 rounded-xl min-h-full justify-center content-center align-middle p-2">
    
    <ul>
      {shortCuts.map((shortCut, index) => (
        <li
          key={index}
          onClick={() => {
            typeof window !== "undefined" && window.open(shortCut.url);
          }}
          className="w-full flex flex-start lg:space-x-8 py-2 px-8 rounded-xl hover:bg-gray-400 text-gray-50 py-4 text-center justify-around  cursor-pointer transition-all duration-100 ease-in-out"
        >
          <img src={shortCut.icon} className="w-24 h-24 my-auto rounded-sm fill-current " />
          
        </li>
      ))}
    </ul>
  </div>
);

export default ShortCuts;
