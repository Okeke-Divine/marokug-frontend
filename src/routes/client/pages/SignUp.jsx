import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
//logo
import SiteLogo from "../../../assets/images/marokug-logo.png";

export default function SignUp({ Config }) {
  const [isPswdVisible, setIsPswdVisible] = useState(false);
  const [pswdType, setPswdType] = useState("password");
  const [toggleIcon, setToggleIcon] = useState("fi fi-tr-user-lock");
  useEffect(
    function () {
      if (isPswdVisible === false) {
        setPswdType("password");
        setToggleIcon("fi fi-tr-user-lock");
      } else {
        setPswdType("text");
        setToggleIcon("fi fi-tr-user-unlock");
      }
    },
    [isPswdVisible]
  );
  function togglePasswordVisibilty() {
    setIsPswdVisible(!isPswdVisible);
  }

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
              Kind fill in your details to be part of {Config.site_name}
            </p>
            <form>
              <div className="mt-5">
                <div className="mb-3">
                  <label>First name</label>
                  <br />
                  <input
                    type="text"
                    placeholder="First name"
                    className="border-gray-200 border-2 rounded-lg pl-3 pr-3 p-2 w-full mt-2"
                  />
                </div>
                <div className="mb-3">
                  <label for="fname">Last name</label>
                  <br />
                  <input
                  name="fname"
                    type="text"
                    placeholder="Last name"
                    className="border-gray-200 border-2 rounded-lg pl-3 pr-3 p-2 w-full mt-2"
                  />
                </div>
                <div className="mb-3">
                  <label>User name</label>
                  <br />
                  <input
                    type="text"
                    placeholder="User name"
                    className="border-gray-200 border-2 rounded-lg pl-3 pr-3 p-2 w-full mt-2"
                  />
                </div>
                <div className="mb-3">
                  <label>Email address</label>
                  <br />
                  <input
                    type="email"
                    placeholder="Email address"
                    className="border-gray-200 border-2 rounded-lg pl-3 pr-3 p-2 w-full mt-2"
                  />
                </div>
                <div className="mb-3">
                  <label>Create password</label>
                  <br />
                  <div className="flex items-center">
                    <div className="w-full">
                      <input
                        type={pswdType}
                        placeholder="Create password"
                        className="border-gray-200 border-2 rounded-lg pl-3 pr-3 p-2 w-full mt-2 rounded-r-none outline-none"
                      />
                    </div>
                    <div
                      onClick={togglePasswordVisibilty}
                      className="w-20 flex justify-center items-center font-bold cursor-pointer bg-gray-200 hover:bg-gray-300 duration-300 h-11 relative top-1"
                    >
                      <i className={toggleIcon}></i>
                    </div>
                  </div>
                </div>
                <div className="mb-3">
                  <label>Confirm password</label>
                  <br />
                  <input
                    type="password"
                    placeholder="Confirm password"
                    className="border-gray-200 border-2 rounded-lg pl-3 pr-3 p-2 w-full mt-2"
                  />
                </div>
                <div className="mb-3">
                  <label>Country</label>
                  <br />
                  <select className="border-gray-200 border-2 rounded-lg pl-3 pr-3 p-2 w-full mt-2">
                    <option>Ghana</option>
                    <option>Nigeria (+234)</option>
                    <option>South Africa</option>
                  </select>
                </div>
                <div className="mb-5">
                  <input name="tac" type="checkbox" />{" "}
                  <label for="tac">
                    I agree to the{" "}
                    <Link
                      to="/terms-and-conditions"
                      className="text-blue-400 hover:text-blue-500 duration-100 hover:border-b-2 border-dotted border-blue-500"
                      target="_blank"
                    >
                      Terms & Conditions
                    </Link>
                  </label>
                </div>
                <div className="mb-5">
                  <button
                    type="button"
                    className="uppercase pt-3 pb-3 pl-6 pr-6 rounded-lg bg-blue-400 text-white hover:bg-blue-500 duration-300 cursor-pointer w-fit"
                  >
                    Sign Up
                  </button>
                </div>
              </div>
            </form>
            <div>
              Aleady have an account?{" "}
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
