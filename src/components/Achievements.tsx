import AchievementsText from "./ui/AchievementsText.tsx";
import {achievementsData} from "../data/achievementsData.ts";
const Achievements = () => {

    return (
        <div className="min-h-screen pb-10 flex flex-col justify-evenly">
            <h2 className="text-center text-4xl font-bold font-mont xl:text-6xl px-4 mb-10">Наши достижения</h2>
            <div className="flex flex-col-reverse lg:flex-row items-center justify-center w-full">
                <div className="w-full lg:w-5/12 h-[800px] overflow-hidden relative px-4">
                    <iframe style={{width: '100%', height: '100%', border: '1px solid #e6e6e6', borderRadius: '8px', boxSizing: 'border-box'}} src="https://yandex.ru/maps-reviews-widget/91079519059?comments"></iframe>
                    <a href="https://yandex.ru/maps/org/comtel/91079519059/" target="_blank"
                       style={{boxSizing: 'border-box', textDecoration: 'none', color: '#ff6600', fontSize: '10px', fontFamily: 'YS Text, sans-serif', padding: '0 20px', position: 'absolute', bottom: '8px', width: '100%', textAlign: 'center', left: 0, overflow: 'hidden', textOverflow: 'ellipsis', display: 'block', maxHeight: '14px', whiteSpace: 'nowrap'}}>ComTeL на карте Волжского — Яндекс Карты</a>
                </div>
                <div className="flex lg:w-6/12 lg:flex-col justify-center lg:gap-4 px-4 gap-2 lg:h-[800px] flex-wrap lg:flex-nowrap mb-10 lg:mb-0">
                    {
                        achievementsData.map(achievements => (
                            <AchievementsText text={achievements.text} />
                        ))
                    }
                </div>
            </div>
        </div>
    );
};

export default Achievements;