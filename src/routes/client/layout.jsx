import Sidebar from "./components/Sidebar";
import ClientRightLayout from "./components/ClientRightLayout.jsx";

export default function ClientLayout({ Config }) {
  return (
    <>
      <div>
        <div className="wd-full">
          <div className="flex">
            <div className="w-1/5 border-r-2 border-gray-200 min-h-[100vh]">
              <Sidebar Config={Config} />
            </div>
            <div className="w-4/5 bg-gray-100">
              <ClientRightLayout />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
