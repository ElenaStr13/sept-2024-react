import {useEffect, useState} from "react";

export const useFetch = <T, >(url: string, defaultValue) => {
    const [obj, setObj] = useState<T>(defaultValue);

    useEffect(() => {
        fetch(url)
            .then(value => value.json())
            .then(value => {
                setObj(value)
            })
    }, []);
    return obj;
}