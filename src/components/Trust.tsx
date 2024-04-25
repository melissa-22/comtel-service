import {trustData} from "../data/trustData.ts";
import ComtelTrustBlock from "./ui/ComtelTrustBlock.tsx";

const Trust = () => {
    return (
        <div id='about' className="min-h-screen flex flex-col justify-evenly lg:h-[70vh]">
            <h2 className="text-center text-4xl font-bold font-mont xl:text-6xl">Почему нам доверяют?</h2>
            <div className="flex justify-between lg:justify-evenly p-4 gap-2 flex-wrap lg:gap-10">
                {
                    trustData.map(trust => (
                        <ComtelTrustBlock image={trust.image} text={trust.text} />
                    ))
                }
            </div>
        </div>
    );
};

export default Trust;