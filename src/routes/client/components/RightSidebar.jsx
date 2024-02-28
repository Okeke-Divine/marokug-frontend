import { useState, useEffect } from "react";

export default function RightSidebar() {
  const courseProgress = [
    {
      name: "Chemisty",
      progress: 74,
      style: {
        bg: "bg-green-400",
        w: "w-[74%]",
      },
    },
    {
      name: "Mathematics",
      progress: 52,
      style: {
        bg: "bg-red-400",
        w: "w-[52%]",
      },
    },
    {
      name: "Physics",
      progress: 98,
      style: {
        bg: "bg-purple-400",
        w: "w-[98%]",
      },
    },
    {
      name: "English",
      progress: 36,
      style: {
        bg: "bg-rose-400",
        w: "w-[36%]",
      },
    },
  ];
  const [currentTimeDate, setCurrentTimeDate] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const options = {
        hour: "numeric",
        minute: "numeric",
        second: "numeric",
        hour12: true,
        day: "numeric",
        month: "short",
        year: "numeric",
      };
      const formattedDateTime = now.toLocaleString("en-US", options);
      setCurrentTimeDate(formattedDateTime);
    }, 1000); // Update every second

    return () => clearInterval(interval);
  }, []);
  return (
    <>
      <div className="pl-5 pr-5 mt-5 md:mt-0">
        <div className="rounded-lg bg-white p-3 shadow-sm hover:shadow-md duration-300">
          <div className="font-bold text-xl">Todo</div>
          <div className="">
            <div className="flex justify-center items-center pt-20 pb-20">
              <div>
                <div className="text-gray-500 flex justify-center text-3xl font-bold">
                  <i class="fi fi-tr-diamond-exclamation"></i>
                </div>
                <div className="text-gray-500">Nothing is here</div>
              </div>
            </div>
          </div>
        </div>
        {/* date */}
        <div className="rounded-lg mt-5 bg-black text-white p-3 shadow-sm hover:shadow-md duration-300">
          <div className="font-bold text-xl text-center">{currentTimeDate}</div>
        </div>
        {/* course progress */}
        <div className="rounded-lg mt-5 bg-white p-3 shadow-sm hover:shadow-md duration-300">
          <div className="font-bold text-xl">Course Progress</div>
          <div className="mt-3">
            {courseProgress.map((progress, index) => (
              <div key={index} className="mb-3">
                <div className="text-gray-900">
                  {progress.name} ({progress.progress}%)
                </div>
                <div className="w-full h-3 rounded-lg bg-gray-300">
                  <div
                    className={`${progress.style.w} h-3 ${progress.style.bg} rounded-lg`}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* user rank */}
        <div className="rounded-lg bg-white mt-5 p-3 shadow-sm hover:shadow-md duration-300">
          <div className="font-bold text-xl">User Rank (Marokug Points)</div>
          <div className="">
            <div className="flex justify-center items-center pt-20 pb-20">
              <div>
                <div className="text-gray-500 flex justify-center text-3xl font-bold">
                  <i class="fi fi-tr-diamond-exclamation"></i>
                </div>
                <div className="text-gray-500">Nothing is here</div>
              </div>
            </div>
          </div>
        </div>
        {/* download report */}
        <div className="rounded-lg bg-white mt-5 pt-10 pb-10 p-10 shadow-sm hover:shadow-md duration-300">
          <div className="font-bold text-xl">
            Download Report
            <i class="fi fi-tr-chart-line-up text-sm ml-2"></i>
          </div>
          <div className="mt-3 text-gray-500">
            Your Report: Comprehensive Insights, Detailed Analysis, and
            Actionable Recommendations
          </div>
          <div className="mt-3">
            <button className="uppercase pt-3 pb-3 pl-6 pr-6 rounded-lg bg-blue-400 text-white hover:bg-blue-500 duration-300 cursor-pointer w-fit">
              Download
            </button>
          </div>
        </div>
        {/* ai assistant */}
        <div className="rounded-lg bg-purple-200 mt-5 pt-10 pb-10 p-10 shadow-sm hover:shadow-md duration-300">
          <div className="font-bold text-xl">Ai Assistant</div>
          <div className="mt-3 text-gray-500">
            Technology that helps people complete tasks faster and more
            efficiently.
          </div>
        </div>
      </div>
    </>
  );
}
