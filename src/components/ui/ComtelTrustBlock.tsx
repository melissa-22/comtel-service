import {FC} from "react";

interface ComtelTrustBlockProps {
    image: string,
    text: string
    alt?: string
}
const ComtelTrustBlock: FC<ComtelTrustBlockProps> = ({image, text, alt}) => {
    return (
        <div className="bg-zinc-900 flex flex-col justify-center items-center w-[48%] lg:w-3/12 h-60 rounded-2xl gap-3">
            <img className="w-12" src={image} alt={alt}/>
            <p className="text-xl font-bold font-mont text-center text-white">{text}</p>
        </div>
    );
};

export default ComtelTrustBlock;