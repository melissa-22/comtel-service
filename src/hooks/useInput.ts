import React, {useState} from "react";
import useValidation from "./useValidation.ts";

const UseInput = (initialValue:any, validations:any) => {
    const [value, setValue] = useState(initialValue);
    const [isDirty, setIsDirty] = useState(false);
    const valid = useValidation(value, validations)

    const clearValue = () => {
        setValue('');
        setIsDirty(false);
    }
    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value)
    }
    // @ts-ignore
    const onBlur = (e: React.SyntheticEvent) => {
        setIsDirty(true)
    }

    return {
        value, onChange, onBlur, clearValue, isDirty, ...valid
    }
};

export default UseInput;