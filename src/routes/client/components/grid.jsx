export default function Grid (){
    return(
        <div className="h-screen bg-red-500 grid grid-cols-12 grid-rows-[100px_1fr]">
            <div className="col-span-4 spanrow bg-gray-500"></div>
            <div className="col-span-8 grid bg-gray-500"></div>
            <div className="col-span-1 bg-gray-500"></div>
        </div>
    )
}