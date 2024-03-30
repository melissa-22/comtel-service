import {FC} from "react";
import {ComtelButtonProps} from "./ComtelButton.tsx";
import {HashLink as Link} from "react-router-hash-link";

interface ComtelLinkProps extends ComtelButtonProps{
    path: string
}
const ComtelLink: FC<ComtelLinkProps> = ({path, background, outline, text, padding}) => {
    return (
        <Link className={`${padding ? padding : 'p-4'} text-white text-center rounded-full w-full sm:w-fit ${background} ${outline ? 'bg-transparent border border-orange !text-orange' : ''}`} to={path}>{text}</Link>
    );
};

export default ComtelLink;