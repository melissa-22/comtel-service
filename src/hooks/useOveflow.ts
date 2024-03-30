import {useEffect} from "react";

const UseOverflow = (isHidden: boolean | undefined) => {

    useEffect(() => {
        if (isHidden) {
            document.body.style.overflow = 'hidden'
            if (window.screen.width > 600) {
                document.body.style.marginRight = '17px'
            }
        } else {
            document.body.style.overflow = 'auto'
            document.body.style.marginRight = '0'
        }
    }, [isHidden]);

    return isHidden
};

export default UseOverflow;