import img1 from "../../../assets/images/borrowed/Esomnofu SS MTH.png";
import img2 from "../../../assets/images/borrowed/Fred.png";
import img3 from "../../../assets/images/borrowed/Live.banner.Gbenga.png";
import img4 from "../../../assets/images/borrowed/Pelumi.png";

function LiveClassComponent({ subject, title, image, instructor, dateTime, style }) {
  return (
    <>
      <div className="group">
        <div className="">
          <img src={image} className="rounded-lg rounded-b-none" />
        </div>
        <div className="p-5 bg-white shadow-md rounded-lg rounded-t-none duration-300 group-hover:shadow-lg">
          <div className={`mt-1 font-bold text-sm ${style.text}`}>
            {subject}
          </div>
          <div className="mt-1 font-bold text-md">{title}</div>
          <div className="mt-3 text-gray-500 text-sm">{instructor}</div>
          <div className="mt-3">
            <hr />
          </div>
          <div className="flex justify-between mt-3 items-center">
            <div className="flex gap-2 text-gray-500 text-sm">
              <div>
                <i className="fi fi-tr-clock-one"></i>
              </div>
              <div>{dateTime}</div>
            </div>
            <div>
              <button className={`rounded-lg border-gray-300 border-2 pt-1 pb-1 pl-3 pr-3 duration-300 ${style.hoverBg} ${style.borderBg} hover:text-white hover:border-blue-400`}>Remind Me</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default function LiveClasses() {
  const upcomingLiveClasses = [
    {
      subject: "Mathematics",
      title: "Measures of Central Tendency (Assumed Mean)",
      image: img1,
      instructor: "Ugwu Martins",
      dateTime: "Feb 26, 10:00 AM",
      status: "upcoming",
      style: {
        text: "text-orange-400",
        hoverBg: "hover:bg-orange-400",
        borderBg: "hover:border-orange-400"
      }
    },
    {
      subject: "English",
      title: "IELTS: Decoding the Language of Human Nature",
      image: img2,
      instructor: "Faith Iruchukwu",
      dateTime: "Feb 26, 10:00 AM",
      status: "upcoming",
      style: {
        text: "text-blue-400",
        hoverBg: "hover:bg-blue-400",
        borderBg: "hover:border-blue-400"
      }
    },
    {
      subject: "Biology",
      title: "Ecology 2",
      image: img3,
      instructor: "John Doe",
      dateTime: "Feb 26, 10:00 AM",
      status: "upcoming",
      style: {
        text: "text-green-400",
        hoverBg: "hover:bg-green-400",
        borderBg: "hover:border-green-400"
      }
    },
    {
      subject: "Mathematics",
      title: "Logarithm ii & Matricies",
      image: img4,
      instructor: "Ugwu Martins",
      dateTime: "Feb 26, 10:00 AM",
      status: "upcoming",
      style: {
        text: "text-yellow-400",
        hoverBg: "hover:bg-orange-400",
        borderBg: "hover:border-orange-400"
      }
    },
  ];
  return (
    <div className="mt-5">
      <div className="flex gap-5 items-end">
        <div className="">
          <h2 className="font-bold text-2xl">Join Live Classes</h2>
        </div>
        <div>
          <a
            href="#"
            className="text-orange-400 border-orange-400 border-b-[1px]"
          >
            See All
          </a>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-5 mt-5">
        {upcomingLiveClasses.map((liveClass, index) => (
          <LiveClassComponent
            key={index}
            subject={liveClass.subject}
            title={liveClass.title}
            image={liveClass.image}
            instructor={liveClass.instructor}
            dateTime={liveClass.dateTime}
            status={liveClass.status}
            style={liveClass.style}
          />
        ))}
      </div>
    </div>
  );
}
