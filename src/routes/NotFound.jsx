import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <>
      <div className="w-full h-screen flex justify-center items-center">
        <div>
          <div className="font-bold text-3xl">Error!</div>
          <div>404 Not Found</div>
          <Link
            to="/home"
            className="text-blue-400 hover:text-blue-500 duration-100 hover:border-b-2 border-dotted border-blue-500"
          >
            Back to home
          </Link>
        </div>
      </div>
    </>
  );
}
