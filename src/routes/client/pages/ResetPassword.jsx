import { Link } from "react-router-dom";
// logo
import SiteLogo from "../../../assets/images/marokug-logo.png";

export default function ResetPassword({ Config }) {
  return (
    <>
      <div className="block md:flex justify-center bg-gray-100">
        <div className="w-full md:w-1/2 bg-white p-10 md:p-20 lg:p-28 pt-5 md:pt-10 pb-5 md:pb-10 lg:pt-14 lg:pb-14">
          <div className="flex items-center justify-center gap-3 w-full">
            <div className="rounded-full border-gray-300 border-2 w-16 h-16 flex justify-center items-center">
              <img
                src={SiteLogo}
                className="w-7"
                alt={Config.site_name + `'s logo`}
              />
            </div>
          </div>
          <div className="mt-5">
            <h1 className="text-xl font-bold">Create an Account!</h1>
            <p className="mt-2">
              A confirmation code would be sent to the email address entered
              below.
            </p>
            <form>
              <div className="mt-5">
                <div className="mb-3">
                  <label htmlFor={'email'}>Email address</label>
                  <br />
                  <input
                    name="email"
                    type="email"
                    placeholder="Email address"
                    className="border-gray-200 border-2 rounded-lg pl-3 pr-3 p-2 w-full mt-2"
                  />
                </div>
                <div className="mb-5">
                  <button
                    type="button"
                    className="uppercase pt-3 pb-3 pl-6 pr-6 rounded-lg bg-blue-400 text-white hover:bg-blue-500 duration-300 cursor-pointer w-fit"
                  >
                    Send Verification Code
                  </button>
                </div>
              </div>
            </form>
            <div>
              Remebered it?
              <Link
                to="/signin"
                className="ml-1 text-blue-400 hover:text-blue-500 duration-100 hover:border-b-2 border-dotted border-blue-500"
              >
                Signin
              </Link>
            </div>
          </div>
        </div>
        <div className="w-full md:w-1/2">a</div>
      </div>
    </>
  );
}
