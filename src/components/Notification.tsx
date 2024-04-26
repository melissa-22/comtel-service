
import {createPortal} from "react-dom";
import {useNotification} from "../store/useNotification.ts";

const Notification = () => {


    const vis = useNotification(state => state.visibility)
    const status = useNotification(state => state.status)

    return (
        vis && createPortal(
            <div
                className={`${status === 200 ? 'bg-green-500' : 'bg-red-600'} animate-show h-20 lg:h-16 lg:w-4/12 font-mont flex justify-center items-center text-center text-sm rounded-2xl z-[53] fixed bottom-10 mx-2 lg:right-10`}>
                {status === 200 ? "Заявка успешно отправлена, с Вами свяжутся в ближайшее время!" : "Что-то пошло не так. Попробуйте позже"}

            </div>
            , document.body)

    );
};

export default Notification;
