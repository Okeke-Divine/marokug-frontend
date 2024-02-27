import SiteLogo from "../../../assets/images/marokug-logo.png";

export default function ClientFooter({ Config }) {
  return (
    <>
      <div>
        <div className="w-full bg-gray-700 p-5 mt-5 text-white">
          <div className="flex gap-3 items-center">
            <div>
              <img
                src={SiteLogo}
                className="w-7"
                alt={Config.site_name + `'s logo`}
              />
            </div>
            <div className="font-bold text-2xl">{Config.site_name}</div>
          </div>
          <div className="text-gray-300">
            <i>..the #1 teaching platform</i>
          </div>
        </div>
      </div>
    </>
  );
}
