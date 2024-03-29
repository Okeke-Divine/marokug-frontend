import ClientNavbarComponent from "./ClientNavbarComponent.jsx";
import PracticeExam from "./PracticeExam.jsx";
import LiveClasses from "./LiveClasses.jsx";
import MultiplayerQuiz from "./multiplayerQuiz.jsx";
import ClientFooter from "./ClientFooter.jsx";
import RightSidebar from "./RightSidebar.jsx";

export default function ClientRightLayout({ Config }) {
  const overviewData = [
    {
      title: "6",
      text: "Courses in Progress",
      style: {
        bg: "bg-red-600",
        text: "text-red-600",
      },
    },
    {
      title: "25",
      text: "Courses Completed",
      style: {
        bg: "bg-blue-600",
        text: "text-blue-600",
      },
    },
    {
      title: "2",
      text: "Certificates Earned",
      style: {
        bg: "bg-yellow-300",
        text: "text-yellow-300",
      },
    },
    {
      title: "98",
      text: "Community Support",
      style: {
        bg: "bg-green-400",
        text: "text-green-400",
      },
    },
  ];
  const subjects = [
    {
      name: "Mathematics",
      icon: <i className="fi fi-tr-calculator-simple"></i>,
      bg: "bg-red-400",
      hoverBg: "hover:bg-red-500",
    },
    {
      name: "Biology",
      icon: <i className="fi fi-tr-bacteria"></i>,
      bg: "bg-orange-400",
      hoverBg: "hover:bg-orange-500",
    },
    {
      name: "Chemistry",
      icon: <i className="fi fi-tr-flask-potion"></i>,
      bg: "bg-green-400",
      hoverBg: "hover:bg-green-500",
    },
    {
      name: "Physics",
      icon: <i className="fi fi-tr-rocket-lunch"></i>,
      bg: "bg-purple-400",
      hoverBg: "hover:bg-purple-500",
    },
    {
      name: "Literature",
      icon: <i className="fi fi-tr-diary-bookmark-down"></i>,
      bg: "bg-blue-400",
      hoverBg: "hover:bg-orange-500",
    },
    {
      name: "English",
      icon: <i className="fi fi-tr-answer-alt"></i>,
      bg: "bg-rose-400",
      hoverBg: "hover:bg-rose-500",
    },
    {
      name: "Economics",
      icon: <i className="fi fi-tr-stats"></i>,
      bg: "bg-emerald-400",
      hoverBg: "hover:bg-emerald-500",
    },
    {
      name: "Government",
      icon: <i className="fi fi-tr-government-flag"></i>,
      bg: "bg-orange-400",
      hoverBg: "hover:bg-orange-500",
    },
    {
      name: "F Accounting",
      icon: <i className="fi fi-tr-calculator-money"></i>,
      bg: "bg-blue-300",
      hoverBg: "hover:bg-blue-400",
    },
  ];
  return (
    <>
      <div className="">
        {/* navbar */}
        <div>
          <ClientNavbarComponent />
        </div>
        {/* main bottom */}
        <div className="block lg:flex mt-5">
          <div className="w-full lg:w-3/5">
            <div className="pl-5 pr-5">
              <div className="w-full p-10 bg-blue-400 rounded-lg hover:shadow-sm cursor-pointer flex justify-between">
                <div className="text-white">
                  <div>
                    <h1 className="font-bold text-3xl">Hello John</h1>
                  </div>
                  <div>
                    <p>Learn anything online and boost your skills</p>
                  </div>
                </div>
                <div>s</div>
              </div>
              {/* data summary */}
              <div className="grid gird-cols-1 lg:grid-cols-4 mt-5 gap-5">
                {overviewData.map((data, index) => (
                  <div
                    key={index}
                    className="bg-white hover:shadow-lg cursor-pointer shadow-md"
                  >
                    <div className="p-5">
                      <div className="w-full text-center">
                        <h2 className={`${data.style.text} text-3xl`}>
                          {data.title}
                        </h2>
                      </div>
                      <div className="w-full text-center my-word-break-all">
                        <p>{data.text}</p>
                      </div>
                    </div>
                    <div className={`w-full h-1 ${data.style.bg}`}></div>
                  </div>
                ))}
              </div>
              {/* watch video lessons */}
              <div className="mt-5 bg-white p-5 rounded-lg shadow-md">
                <div>
                  <h2 className="font-bold text-xl">Watch Video Lesson</h2>
                  {/* video lessons container */}
                  <div className="grid gird-cols-1 lg:grid-cols-3 gap-5 mt-3">
                    {subjects.map((subject, index) => (
                      <div
                        key={index}
                        className={`${subject.bg} ${subject.hoverBg} duration-300 rounded-lg p-5 pt-4 pb-4 cursor-pointer text-white`}
                      >
                        <div className="text-left mb-2">{subject.icon}</div>
                        <div className="text-right">{subject.name}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              {/* Practice exam */}
              <PracticeExam />
              {/* live classes */}
              <LiveClasses />
              {/* multiplayer quiz */}
              <MultiplayerQuiz />
            </div>
          </div>
          <div className="w-full lg:w-2/5">
            <RightSidebar />
          </div>
        </div>
        {/* footer */}
        <ClientFooter Config={Config} />
      </div>
    </>
  );
}
