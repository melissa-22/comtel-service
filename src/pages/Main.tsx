import Slider from "../components/Slider.tsx";
import Trust from "../components/Trust.tsx";
import Achievements from "../components/Achievements.tsx";
import DeliveryOrder from "../components/DeliveryOrder.tsx";
import Questions from "../components/Questions.tsx";
import Calculator from "../components/Calculator.tsx";


const Main = () => {
    return (
        <>
            <Slider />
            <Calculator />
            <Trust/>
            <Achievements />
            <DeliveryOrder />
            <Questions />
        </>
    );
};

export default Main;