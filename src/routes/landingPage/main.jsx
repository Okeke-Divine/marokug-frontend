import { Link } from "react-router-dom";

export default function LandingPage({ Config }) {
  return (
    <>
      <div className="flex justify-center items-center h-screen">
        <div>
        <div className="font-bold text-xl">Welcome to {Config.site_name}.</div>
      <div>
        The landing page is still under construction.
        <br />
        In the mean time, vist the{" "}
        <Link
          to="/home"
          className="ml-1 text-blue-400 hover:text-blue-500 duration-100 hover:border-b-2 border-dotted border-blue-500"
        >
          Home
        </Link>{" "}
        page.
      </div>
        </div>
      </div>
    </>
  );
}
