import avartar from "../../../assets/images/avartar/male.jpg";

export default function ClientNavbarComponent() {
  return (
    <>
      <div className="sticky top-0 bg-white p-5 flex justify-between items-center border-b-2 border-gray-100">
        <div className="p-2 pr-3 pl-3 rounded-xl border-gray-200 border-2 flex gap-x-2 wd-fit">
          <input
          type="search"
            placeholder="What would you like to learn?"
            className="bg-transparent w-80 outline-none"
          />
          <button>
            <i className="fa fa-search"></i>
          </button>
        </div>
        {/* navbar right section */}
        <div className="flex gap-5 items-center">
          <div>
            <div className="cursor-pointer"><i className="fa fa-bell text-xl"></i></div>
          </div>
          <div className="flex gap-x-4 items-center cursor-pointer">
            <div>
              <img src={avartar} className="w-10 h-10 rounded-[50%]" />
            </div>
            <div>
              <div className="font-bold">John Doe</div>
              <div className="text-gray-400 text-xs">SS3 (WAEC</div>
            </div>
            <div>
              <i className="fa fa-caret-down"></i>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
