import multiplayerQuizImage from "../../../assets/images/borrowed/multiplayerQuiz.17a1ca67.png"

export default function MultiplayerQuiz(){
    return(
        <>
            <div className="mt-5 cursor-pointer rounded-lg hover:opacity-80 duration-300">
                <img alt="Multiplayer quiz image" src={multiplayerQuizImage} />
            </div>
        </>
    )
}