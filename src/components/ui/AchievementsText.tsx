import check from '../../assets/check-mark.svg';
import {FC} from "react";
interface AchievementsTextProps {
    text: string;
}
const AchievementsText: FC<AchievementsTextProps> = ({text}) => {
    return (
        <div className="group flex items-center w-full gap-2 shadow-lg border border-b-4 hover:border-b-orange hover:border-b-4 lg:hover:shadow-2xl duration-500 rounded-2xl h-24 lg:h-32 lg:justify-start">
            <img className="w-12 pl-2 lg:ml-10 group-hover:animate-bounce" src={check} alt=""/>
            <p className="text-[18px] font-mont font-medium pr-2 lg:pl-10 leading-5">{text}</p>
        </div>
    );
};

export default AchievementsText;