import Swal from "sweetalert2";

const LogoutComponent = ({ code }) => {
  const handleLogout = () => {
    console.log("logout button clicked");
    Swal.fire({
      title: "Logging Out",
      text: "Are you sure you want to log out?",
      icon: "question",
      showCancelButton: true,
      confirmButtonText: "Yes, logout",
      cancelButtonText: "Cancel",
    }).then((result) => {
      if (result.isConfirmed) {
        console.log("User confirmed logout");
        window.location = "/signin?logout=true";
      }
    });
  };

  return (
    <>
      {code === 1 && (
        <div onClick={handleLogout} className="flex gap-x-2 p-3 pl-5 pr-5 cursor-pointer hover:bg-gray-100">
          <div>
            <i className="fi fi-rs-sign-out-alt"></i>
          </div>
          <div className="cursor-pointer">
            Logout
          </div>
        </div>
      )}
    </>
  );
};

export default LogoutComponent;
