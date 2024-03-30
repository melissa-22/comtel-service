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
                 className={`lg:w-4/12 rounded-3xl font-mont text-white flex justify-center items-center ${full ? 'w-full' : 'w-[48%]'} ${highlight ? 'bg-orange' : 'bg-zinc-900'} h-72`}>
                {
                    isFlipped
                        ? <p className='animate-show text-center'>{back}</p>
                        :
                        <div className='animate-show'>
                            <p className='text-center font-bold'>{front.head}</p>
                            <p className='text-center'>{front.question}</p>
                        </div>
                }
            </div>
        </>
    );
};

export default ComtelFlipQuestion;