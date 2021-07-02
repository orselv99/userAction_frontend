import axios from "axios";
import { useState, useEffect } from "react";

function useFetch(url) {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const fetchUrl = async () => {
        await axios.get(url).then(response => {
            console.log(response.data);
            setData(JSON.stringify(response.data));
        });
        setLoading(false);
    }
    useEffect(() => {
        fetchUrl();
    }, []);

    console.log(data);
    console.log(loading);

    return [data, loading];
}

export { useFetch };