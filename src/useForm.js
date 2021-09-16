import { useState } from 'react';

export const useForm = (initialValues) => {
    const [values, setValues] = useState(initialValues);

    console.log("useForm was called");

    return [
        values,
        e => { 
            setValues({
                ...values,
                [e.target.name]: e.target.value
            });
        }
    ]
}

export default useForm;