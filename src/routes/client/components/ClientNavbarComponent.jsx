import avartar from "../../../assets/images/avartar/male.jpg";

export default function ClientNavbarComponent() {
  return (
    <>
      <div className="sticky top-0 bg-gray-800 md:bg-white p-5 pt-3 pb-3 flex justify-between items-center">
        <div className="p-2 pr-3 pl-3 rounded-xl border-gray-200 border-2 flex gap-x-2 wd-fit">
          <input
            type="search"
            placeholder="What would you like to learn?"
            className="bg-transparent w-[8rem] md:w-40 lg:w-80 outline-none text-white md:text-black"
          />
          <button>
            <i className="fi fi-rr-search text-white md:text-gray-800"></i>
          </button>
        </div>
        {/* navbar right section */}
        <div className="flex gap-x-1 md:gap-x-10 items-center">
          <div>
            <div className="cursor-pointer hover:bg-gray-100 duration-300 box-border p-2 rounded-xl text-white md:text-black hover:text-black">
              <i className="fi fi-tr-bells text-xl relative top-1"></i>
            </div>
          </div>
          {/* account dropdown badge */}
          <div className="flex gap-x-1 md:gap-x-4 items-center cursor-pointer hover:bg-gray-100 duration-300 box-border p-2 rounded-xl group">
            <div>
              <img src={avartar} className="w-10 h-10 rounded-[50%]" />
            </div>
            <div className="flex gap-x-2 items-center">
              <div className="hidden md:block">
                <div className="font-bold">John Doe</div>
                <div className="text-gray-400 text-xs">SS3 (WAEC)</div>
              </div>
              <div>
                <i className="fi fi-tr-caret-down relative top-1 text-white md:text-black group-hover:text-black"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
