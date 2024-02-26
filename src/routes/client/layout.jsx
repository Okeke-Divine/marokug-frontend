import Sidebar from "./components/Sidebar";
import ClientRightLayout from "./components/ClientRightLayout.jsx";

export default function ClientLayout({ Config }) {
  return (
        <div className="h-screen overflow-y-auto bg-gray-100">
          <div className="flex h-screen overflow-y-auto">
            <div className="w-[260px] border-r-2 border-gray-200 h-[100vh]">
              <Sidebar Config={Config} />
            </div>
            <div className="flex-1">
              <ClientRightLayout />
            </div>
          </div>
        </div>
  );
}
