export default function SidebarLinkComponent({index,link}) {
  return (
    <>
      <div
        key={index}
        className={`hover:bg-blue-400 hover:text-white duration-300 cursor-pointer flex wd-fit p-2 rounded-lg  gap-x-2  pl-5 pr-5 mb-2 ${
          link.active == true ? "bg-blue-400 text-white" : "text-gray-500"
        }`}
      >
        <div>{link.icon}</div>
        <div>{link.name}</div>
      </div>
    </>
  );
}
