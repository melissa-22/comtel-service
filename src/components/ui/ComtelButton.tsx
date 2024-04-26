import {FC, SyntheticEvent} from "react";

export interface ComtelButtonProps {
    background: string
    outline?: boolean
    text: string
    size?: string
    padding?: string
    disabled?: boolean
    onClick?: (e: SyntheticEvent) => void
}

const ComtelButton: FC<ComtelButtonProps> = ({background, outline, text, size, padding, disabled, onClick}) => {
    return (
        <button onClick={onClick} disabled={disabled}
                className={`${padding ? padding : 'p-4'} disabled:opacity-50 hover:shadow-xl disabled:hover:bg-none hover:bg-white hover:text-black duration-300 text-white rounded-full w-full sm:w-fit ${background} ${size} ${outline ? 'bg-transparent border border-orange !text-orange' : ''}
        `}>
            {text}
        </button>
    );
};

export default ComtelButton;