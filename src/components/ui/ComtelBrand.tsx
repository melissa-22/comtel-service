import {FC} from "react";

interface ComtelBrandProps {
    name: string
    img: string
}

const ComtelBrand: FC<ComtelBrandProps> = ({name, img}) => {

    return (
        <>
            {!img && <p>{name}</p>}
            <img className='w-40' src={img} alt={name}/>
        </>
);
};

export default ComtelBrand;