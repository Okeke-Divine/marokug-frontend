import Sidebar from "./components/Sidebar";
import ClientRightLayout from "./components/ClientRightLayout.jsx";

export default function ClientLayout({ Config }) {
  return (
        <div className="h-screen overflow-y-auto bg-gray-100">
          <div className="overflow-y-auto">
            <div className="fixed top-0 left-0 w-0 duration-300 md:w-[260px] h-[100vh]">
              <Sidebar Config={Config} />
            </div>
            <div className="ml-0 md:ml-[260px] duration-300">
              <ClientRightLayout Config={Config} />
            </div>
          </div>
        </div>
  );
}
