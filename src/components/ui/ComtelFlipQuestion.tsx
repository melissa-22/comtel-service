import {FC, useState} from "react";

interface ComtelFlipQeustionProps {
    front: {
        head: string
        question: string
    }
    back: string
    highlight: boolean
    full: boolean
}

const ComtelFlipQuestion: FC<ComtelFlipQeustionProps> = ({front, back, highlight, full}) => {
    const [isFlipped, setIsFlipped] = useState<boolean>(false);
    const flipHandler = () => {
        setIsFlipped(prevState => !prevState);
    }

    return (
        <>
            <div onMouseEnter={flipHandler} onMouseLeave={flipHandler}
                 className={`lg:w-4/12 hover:shadow-xl duration-500 rounded-3xl font-mont flex justify-center items-center ${full ? 'w-full' : 'w-[48%]'} ${highlight ? 'bg-orange text-white border hover:border-b-gray-400 border-b-4' : 'border  border-b-4 hover:border-b-orange'} h-72`}>
                {
                    isFlipped
                        ? <p className='animate-show text-center font-medium px-4'>{back}</p>
                        :
                        <div className='animate-show'>
                            <p className='text-center font-bold'>{front.head}</p>
                            <p className='text-center font-medium'>{front.question}</p>
                        </div>
                }
            </div>
        </>
    );
};

export default ComtelFlipQuestion;