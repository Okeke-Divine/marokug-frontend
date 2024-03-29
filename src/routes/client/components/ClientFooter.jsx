import SiteLogo from "../../../assets/images/marokug-logo.png";

function CreateLink({ href, linkname }) {
  return (
    <a
      href={href}
      target="_blank"
      className="block w-fit mt-2 md:mt-0 text-gray-400 hover:text-white hover:border-b-2 hover:border-white duration-100"
    >
      {linkname}
    </a>
  );
}

export default function ClientFooter({ Config }) {
  const socials = [
    {
      name: "Facebook",
      icon: <i className="fi fi-brands-facebook"></i>,
      url: "#",
    },
    {
      name: "Twitter (X)",
      icon: <i className="fi fi-brands-twitter-alt-circle"></i>,
      url: "#",
    },
    {
      name: "Instagram",
      icon: <i className="fi fi-brands-instagram"></i>,
      url: "#",
    },
    {
      name: "Linkedin",
      icon: <i className="fi fi-brands-linkedin"></i>,
      url: "#",
    },
  ];

  return (
    <>
      <div>
        <div className="w-full bg-gray-700 p-10 pt-10 pb-10 mt-5 text-white">
          <div className="block md:grid lg:grid md:grid-cols-2 lg:grid-cols-5 md:gap-5 lg:gap-5">
            <div className="mb-5 md:md-0">
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
              <div className="text-gray-300 mt-3">
              Unlock Your Learning Potential with Marokug - The Ultimate Educational Platform
              </div>
              <div className="mt-3">
                <div className="flex gap-x-5">
                  {socials.map((social, index) => (
                    <a key={index} href={social.url} target="_blank">
                      <div className="cursor-pointer" key={index}>
                        {social.icon}
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            </div>
            {/* company */}
            <div className="mb-5 md:md-0 my-word-break-all">
              <div className="font-bold text-xl">Company</div>
              <div className="mt-3">
                <CreateLink href="#" linkname="About Us" />
                <CreateLink href="#" linkname="Services" />
                <CreateLink href="#" linkname="Community" />
                <CreateLink href="#" linkname="Testimonials" />
              </div>
            </div>
            {/* support */}
            <div className="mb-5 md:md-0 my-word-break-all">
              <div className="font-bold text-xl">Support</div>
              <div className="mt-3">
                <CreateLink href="#" linkname="Help Center" />
                <CreateLink href="#" linkname="Tweet @ Us" />
                <CreateLink href="#" linkname="Feedback" />
              </div>
            </div>
            {/* links */}
            <div className="mb-5 md:md-0 my-word-break-all">
              <div className="font-bold text-xl">Links</div>
              <div className="mt-3">
                <CreateLink href="#" linkname="Courses" />
                <CreateLink href="#" linkname="Become an Instructor" />
                <CreateLink href="#" linkname="Services" />
                <CreateLink href="#" linkname="Mini Tools" />
              </div>
            </div>
            {/* contact us */}
            <div className="mb-5 md:md-0 my-word-break-all">
              <div className="font-bold text-xl">Contact Us</div>
              <div className="mt-3 text-wrap">
                <CreateLink href="#" linkname="(234) 7453827569" />
                <CreateLink href="#" linkname="support@marokug.com" />
              </div>
            </div>
          </div>
          {/* hr */}
          <div className="mt-3 mb-3">
            <hr />
          </div>
          {/* footer second layout - bottom */}
          <div className="mt-5 block md:flex md:flex-wrap md:gap-5 items-center justify-between">
            <div>&copy; (2024) Marokug. All right reserved.</div>
            <div className="block md:flex md:flex-wrap md:gap-3">
              <div>
                <CreateLink href="#" linkname={"Privacy Policy"} />
              </div>
              <div>
                <CreateLink href="#" linkname={"Terms of Use"} />
              </div>
              <div>
                <CreateLink href="#" linkname={"Legal"} />
              </div>
              <div>
                <CreateLink href="#" linkname={"Site Map"} />
              </div>
            </div>
          </div>
          {/* built by */}
          <div className="mt-3 text-gray-300">
            Built by <a href="https://okekedivine.vercel.app/" target="_blank" className="text-white">Dev Divine</a>
          </div>
        </div>
      </div>
    </>
  );
}
