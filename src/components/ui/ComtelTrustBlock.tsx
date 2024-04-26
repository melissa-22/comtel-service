import {FC} from "react";

interface ComtelTrustBlockProps {
    image: string,
    text: string
    alt?: string
}
const ComtelTrustBlock: FC<ComtelTrustBlockProps> = ({image, text, alt}) => {
    return (
        <div className="shadow-lg flex flex-col justify-center items-center px-2 w-[48.5%] lg:w-[22%] h-60 rounded-2xl gap-3 border border-b-4 hover:border-b-orange hover:border-b-4 hover:shadow-2xl duration-500">
            <img className="w-16" src={image} alt={alt}/>
            <p className="text-base lg:text-xl font-bold font-mont text-center">{text}</p>
        </div>
    );
};

export default ComtelTrustBlock;