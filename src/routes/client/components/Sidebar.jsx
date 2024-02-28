import SiteLogo from "../../../assets/images/marokug-logo.png";
import { useState, useEffect } from "react";

export default function Sidebar({ Config }) {
  const isLargeScreen = window.innerWidth >= 768; // Check if the screen is large
  const [isSidebarExpanded, setIsSidebarExpanded] = useState(isLargeScreen);
  // Toggle sidebar expansion state
  const toggleSidebar = () => {
    setIsSidebarExpanded(!isSidebarExpanded);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsSidebarExpanded(true); // Expand sidebar on large screens
      } else {
        setIsSidebarExpanded(false); // Minimize sidebar on small screens
      }
    };

    // Add event listener for window resize
    window.addEventListener('resize', handleResize);

    // Cleanup function to remove event listener
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);


  const sideBarLinks = [
    {
      name: "Home",
      icon: <i className="fi fi-tr-house-chimney"></i>,
      active: true,
    },
    {
      name: "Live Class",
      icon: <i className="fi fi-tr-live"></i>,
      active: false,
    },
    {
      name: "Video Libary",
      icon: <i className="fi fi-tr-circle-video"></i>,
      active: false,
    },
    {
      name: "Mock Exams",
      icon: <i className="fi fi-tr-memo"></i>,
      active: false,
    },
    {
      name: "Multiplayer Quiz",
      icon: <i className="fi fi-tr-trophy-star"></i>,
      active: false,
    },
    {
      name: "Practice Exams",
      icon: <i className="fi fi-tr-journal-alt"></i>,
      active: false,
    },
    {
      name: "Learning Report",
      icon: <i className="fi fi-tr-chart-line-up"></i>,
      active: false,
    },
    {
      name: "Notifications",
      icon: <i className="fi fi-tr-bells"></i>,
      active: false,
    },
  ];
  const paymentLinks = [
    {
      name: "Buy Learning Plan",
      icon: <i className="fi fi-tr-cart-arrow-down"></i>,
      active: false,
    },
    {
      name: "Manage Subscriptions",
      icon: <i className="fi fi-tr-hand-holding-usd"></i>,
      active: false,
    },
  ];
  const contactLinks = [
    {
      name: "Contact Support",
      icon: <i className="fi fi-tr-user-headset"></i>,
      active: false,
    },
  ];
  return (
    <>
      <div className={`fixed top-0 ${isSidebarExpanded ? 'left-0' : '-left-full'} w-[260px] z-50 overflow-y-auto duration-300 md:w-[260px] h-[100%] bg-gray-800 md:block`}>
        {/* name and logo */}
        <div className="pt-10 pb-10">
          <a className="cursor-pointer" href="/">
            <div className="flex items-center justify-center gap-3 w-full">
              <div>
                <img
                  src={SiteLogo}
                  className="w-7"
                  alt={Config.site_name + `'s logo`}
                />
              </div>
              <div className="flex font-semibold text-3xl justify-center text-white">
                {Config.site_name}
              </div>
            </div>
          </a>
        </div>
        {/* side bar links */}
        <div className="pl-5 pr-5">
          {sideBarLinks.map((link, index) => (
            <div
              key={index}
              className={`hover:bg-blue-400 hover:text-white duration-300 cursor-pointer flex wd-fit p-2 rounded-lg  gap-x-2  pl-5 pr-5 mb-2 ${
                link.active == true ? "bg-blue-400 text-white" : "text-gray-500"
              }`}
            >
              <div>{link.icon}</div>
              <div>{link.name}</div>
            </div>
          ))}
          <div className="p-5">
            <hr className="" />
          </div>
          {paymentLinks.map((link, index) => (
            <div
              key={index}
              className={`hover:bg-blue-400 hover:text-white duration-300 cursor-pointer flex wd-fit p-2 rounded-lg  gap-x-2  pl-5 pr-5 mb-2 ${
                link.active == true ? "bg-blue-400 text-white" : "text-gray-500"
              }`}
            >
              <div>{link.icon}</div>
              <div>{link.name}</div>
            </div>
          ))}
          <div className="p-5">
            <hr className="" />
          </div>
          {contactLinks.map((link, index) => (
            <div
              key={index}
              className={`hover:bg-blue-400 hover:text-white duration-300 cursor-pointer flex wd-fit p-2 rounded-lg  gap-x-2  pl-5 pr-5 mb-2 ${
                link.active == true ? "bg-blue-400 text-white" : "text-gray-500"
              }`}
            >
              <div>{link.icon}</div>
              <div>{link.name}</div>
            </div>
          ))}
        </div>
      </div>
      {/* sidebar visibility toggle component */}
      <div className={`flex md:hidden fixed bottom-5 ${isSidebarExpanded ? 'left-[17rem]' : 'left-5'} rounded-full bg-blue-400 hover:bg-blue-500 text-white items-center justify-center w-10 h-10 cursor-pointer shadow-sm hover:shadow-md shadow-gray-400 hover:shadow-gray-400 duration-300`} onClick={toggleSidebar}>
        <i className={`fi ${isSidebarExpanded ? 'fi fi-tr-circle-xmark' : 'fi-tr-bars-staggered'} relative top-[0.15rem] cursor-pointer`}></i>
      </div>
    </>
  );
}
