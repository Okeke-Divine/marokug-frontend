export default function Sidebar({ Config }) {
  const sideBarLinks = [
    {
      name: "Home",
      icon: <i className="fa fa-home"></i>,
      active: true,
    },
    {
      name: "Live Class",
      icon: <i className="fa fa-users"></i>,
      active: false,
    },
    {
      name: "Video Libarry",
      icon: <i className="fa fa-play-circle"></i>,
      active: false,
    },
    {
      name: "Mock Exams",
      icon: <i className="fa fa-sticky-note"></i>,
      active: false,
    },
    {
      name: "Multiplayer Quiz",
      icon: <i className="fa fa-users"></i>,
      active: false,
    },
    {
      name: "Practice Exams",
      icon: <i className="fa fa fa-sticky-note"></i>,
      active: false,
    },
    {
      name: "Learning Report",
      icon: <i className="fa fa-cog"></i>,
      active: false,
    },
    {
      name: "Notifications",
      icon: <i className="fa fa-bell"></i>,
      active: false,
    },
  ];
  const paymentLinks = [
    {
      name: "Buy Learning Plan",
      icon: <i className="fa fa-cart-shopping"></i>,
      active: false,
    },
    {
      name: "Manage Subscriptions",
      icon: <i className="fa fa-users"></i>,
      active: false,
    },
  ];
  const contactLinks = [
    {
      name: "Contact Support",
      icon: <i className="fa fa-whatsapp"></i>,
      active: false,
    }
  ];
  return (
      <div className="h-screen overflow-y-auto bg-white">
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
                className={`hover:bg-blue-400 hover:text-white cursor-pointer flex wd-fit p-2 rounded-lg  gap-x-2  pl-5 pr-5 mb-2 ${
                  link.active == true
                    ? "bg-blue-400 text-white"
                    : "text-gray-500"
                }`}
              >
                <div>{link.icon}</div>
                <div>{link.name}</div>
              </div>
            </>
          ))}
          <div className="p-5">
            <hr className="" />
          </div>
          {paymentLinks.map((link, index) => (
            <>
              <div
                key={index}
                className={`hover:bg-blue-400 hover:text-white cursor-pointer flex wd-fit p-2 rounded-lg  gap-x-2  pl-5 pr-5 mb-2 ${
                  link.active == true
                    ? "bg-blue-400 text-white"
                    : "text-gray-500"
                }`}
              >
                <div>{link.icon}</div>
                <div>{link.name}</div>
              </div>
            </>
          ))}
          <div className="p-5">
            <hr className="" />
          </div>
          {contactLinks.map((link, index) => (
            <>
              <div
                key={index}
                className={`hover:bg-blue-400 hover:text-white cursor-pointer flex wd-fit p-2 rounded-lg  gap-x-2  pl-5 pr-5 mb-2 ${
                  link.active == true
                    ? "bg-blue-400 text-white"
                    : "text-gray-500"
                }`}
              >
                <div>{link.icon}</div>
                <div>{link.name}</div>
              </div>
            </>
          ))}
        </div>
      </div>
  );
}
