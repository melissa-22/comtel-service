import {useCallback, useRef} from "react";

const UseDebounce = (callback:any, delay: number) => {
    const timer = useRef(null);
    const debounceCallback = useCallback((...args:any[]) => {
        if (timer.current) {
            clearTimeout(timer.current)
        }

        // @ts-ignore
        timer.current = setTimeout(() => {
            callback(...args)
        }, delay)
    }, [callback, delay])

    return debounceCallback
};

export default UseDebounce;