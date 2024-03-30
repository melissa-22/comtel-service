import {questionsData} from "../data/questionsData.ts";
import ComtelFlipQuestion from "./ui/ComtelFlipQuestion.tsx";

const Questions = () => {
    return (
        <div className="h-screen bg-black flex flex-col justify-evenly lg:h-[70vh]">
            <h2 className="text-center text-4xl text-white font-bold font-mont xl:text-6xl">Вопросы?</h2>
            <div className='flex w-full px-4 gap-2 justify-between flex-wrap lg:flex-nowrap'>
                {
                    questionsData.map(question => (
                        <ComtelFlipQuestion front={question.front} back={question.back} highlight={question.highlight}  full={question.full}/>
                    ))
                }
            </div>
        </div>
    );
};

export default Questions;