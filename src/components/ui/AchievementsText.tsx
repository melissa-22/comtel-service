import check from '../../assets/check-mark.svg';
import {FC} from "react";
interface AchievementsTextProps {
    text: string;
}
const AchievementsText: FC<AchievementsTextProps> = ({text}) => {
    return (
        <div className="flex items-center w-full gap-2 bg-zinc-900 rounded-2xl h-24 lg:h-32 lg:justify-start">
            <img className="w-12 pl-2 lg:ml-10" src={check} alt=""/>
            <p className="text-white text-[18px] font-mont pr-2 lg:pl-10">{text}</p>
        </div>
    );
};

export default AchievementsText;