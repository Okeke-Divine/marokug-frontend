export default function Sidebar({ Config }) {
  const sideBarLinks = [
    {
      name: "Dashboard",
      icon: <i className="fa fa-th"></i>,
      active: true,
    },
    {
      name: "All Course",
      icon: <i className="fa fa-book"></i>,
      active: false,
    },
    {
      name: "Lectures",
      icon: <i className="fa fa-book-open-reader"></i>,
      active: false,
    },
    {
      name: "Schdules",
      icon: <i className="fa fa-calendar-day"></i>,
      active: false,
    },
    {
      name: "Dictionary",
      icon: <i className="fa fa-book-reader"></i>,
      active: false,
    },
    {
      name: "Archivements",
      icon: <i className="fa fa-graduation-cap"></i>,
      active: false,
    },
    {
        name: "Setting",
        icon: <i className="fa fa-cog"></i>,
        active: false,
      },
  ];
  return (
    <>
      <div className="">
        {/* name and logo */}
        <div className="pt-10 pb-10">
          <div className="flex font-semibold text-3xl justify-center">
            {Config.site_name}
          </div>
        </div>
        {/* side bar links */}
        <div className="pl-5 pr-5">
          {sideBarLinks.map((link, index) => (
            <>
              <div
                key={index}
                className={`hover:bg-blue-400 hover:text-white cursor-pointer flex wd-fit p-2 rounded-lg  gap-x-2  pl-5 pr-5 mb-2 ${link.active == true ? 'bg-blue-400 text-white' : 'text-gray-500'}`}
              >
                <div>{link.icon}</div>
                <div>{link.name}</div>
              </div>
            </>
          ))}
        </div>
      </div>
    </>
  );
}
