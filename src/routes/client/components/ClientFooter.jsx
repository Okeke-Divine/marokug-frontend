import SiteLogo from "../../../assets/images/marokug-logo.png";

function CreateLink({ href, linkname }) {
  return (
    <a
      href={href}
      target="_blank"
      className="block w-fit mt-2 text-gray-400 hover:text-white hover:border-b-2 hover:border-white duration-100"
    >
      {linkname}
    </a>
  );
}

export default function ClientFooter({ Config }) {
  return (
    <>
      <div>
        <div className="w-full bg-gray-700 p-10 pt-10 pb-5 mt-5 text-white">
          <div className="block md:grid lg:grid md:grid-cols-2 lg:grid-cols-5 md:gap-5 lg:gap-5">
            <div>
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
              <div className="text-gray-300 mt-2">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Eligendi neque pariatur culpa saepe.
              </div>
              <div className="mt-5">
                <div className="flex justify-between gap-3">
                  <div className="cursor-pointer">
                    <i className=""></i>
                  </div>
                  <div className="cursor-pointer">
                    <i className=""></i>
                  </div>
                  <div className="cursor-pointer">
                    <i className=""></i>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="font-bold text-xl">Company</div>
              <div className="mt-3">
                <CreateLink href="#" linkname="About Us" />
                <CreateLink href="#" linkname="Services" />
                <CreateLink href="#" linkname="Community" />
                <CreateLink href="#" linkname="Testimonials" />
              </div>
            </div>
            <div>
              <div className="font-bold text-xl">Support</div>
              <div className="mt-3">
                <CreateLink href="#" linkname="Help Center" />
                <CreateLink href="#" linkname="Tweet @ Us" />
                <CreateLink href="#" linkname="Feedback" />
              </div>
            </div>
            <div>
              <div className="font-bold text-xl">Links</div>
              <div className="mt-3">
                <CreateLink href="#" linkname="Courses" />
                <CreateLink href="#" linkname="Become an Instructor" />
                <CreateLink href="#" linkname="Service" />
                <CreateLink href="#" linkname="All in One" />
              </div>
            </div>
            <div>
              <div className="font-bold text-xl">Contact Us</div>
              <div className="mt-3">
                <CreateLink href="#" linkname="(234) 7453827569" />
                <CreateLink href="#" linkname="support@marokug.com" />
              </div>
            </div>
          </div>
          <div className="mt-3 mb-3">
            <hr />
          </div>
          {/* footer second layout - bottom */}
          <div className="mt-5 block md:flex md:flex-wrap md:gap-5">
            <div>&copy; by Marokug. All right reserved.</div>
            <div className="block md:flex md:flex-wrap md:gap-3">
              <div><CreateLink href="#" linkname={'Privacy Policy'} /></div>
              <div><CreateLink href="#" linkname={'Terms of Use'} /></div>
              <div><CreateLink href="#" linkname={'Legal'} /></div>
              <div><CreateLink href="#" linkname={'Site Map'} /></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
