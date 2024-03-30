import ComtelLink from "../components/ui/ComtelLink.tsx";
import Header from "../components/Header.tsx";


const Error = () => {

    return (
        <>
            <Header />
            <div className="h-screen lg:h-[92vh] w-screen bg-black flex flex-col justify-center items-center text-white font-mont px-4 gap-5">
                <p className="text-orange font-bold text-8xl">404</p>
                <p className="text-4xl text-center">Страница не найдена</p>
                <ComtelLink background="bg-orange" text="Вернуться на главную"  path='/'/>
            </div>
        </>

    );
};

export default Error;