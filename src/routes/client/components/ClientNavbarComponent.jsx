export default function ClientNavbarComponent() {
  return (
    <>
      <div className="bg-white p-5 flex justify-between items-center">
        <div className="p-2 pr-3 pl-3 rounded-xl border-gray-200 border-2 flex gap-x-2 wd-fit">
          <input placeholder="Seach here" className="bg-transparent w-80 outline-none" />
          <button>
            <i className="fa fa-search"></i>
          </button>
        </div>
        <div>me</div>
      </div>
    </>
  );
}
