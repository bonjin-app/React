import { useState, useEffect } from 'react';

const useFetch = (callback, url) => {
    const [loading, setLoading] = useState(false);

    const fetchInitialDate = async () => {
        setLoading(true)
        const response = await fetch(url);
        const body = await response.json();
        setLoading(false)
        callback(body);
    }

    useEffect(() => {
        fetchInitialDate();
    }, [])

    return loading;
}

export default useFetch;