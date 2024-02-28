import ReadyTtYn from "../../../assets/images/borrowed/practice-exam.d41f1e39.png"
export default function PracticeExam() {
  return (
    <>
      <div className="block md:flex gap-5 pb-0 bg-white rounder-lg mt-5 shadow-md p-5 rounded-lg items-center pl-10 pr-10">
        <div className="w-full md:w-1/2">
            <div className="mt-2 uppercase text-sm text-orange-400">Practice Exam</div>
            <div className="mt-5 font-bold text-2xl">Ready to test your knowledge?</div>
            <div className="mt-3 text-gray-500">Take practice exams to prepare for upcoming exams. Practice makes perfect grades!</div>
            <button className="uppercase mt-5 mb-5 pt-3 pb-3 pl-6 pr-6 rounded-lg bg-blue-400 text-white hover:bg-blue-500 duration-300 cursor-pointer w-fit">
              Start Practice
            </button>
        </div>
        <div className="w-full md:w-1/2 self-end">
            <img src={ReadyTtYn} alt="Ready to test your knowledge?" />
        </div>
      </div>
    </>
  );
}
