import { useState, useCallback, useRef, useEffect } from 'react';

export const useHttp = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState();
    const activeRequests = useRef([]);

    const requestSender = useCallback( 
        async (url, method = 'GET', body = null, headers = {}) => {
        setIsLoading(true)
        const abortHttp = new AbortController();
        activeRequests.current.push(abortHttp)

    try {
        const response = await fetch(url, {
            method,
            body,
            headers,
            signal: abortHttp.signal
        })
            const responses = await response.json();
            activeRequests.current = activeRequests.current.filter(
                ctrl => ctrl !== abortHttp
            );
            if (!response.ok) {
                throw new Error(responses.message)
            }
            setIsLoading(false)
            return responses
        } catch (err) {
        setError(err.message);
        setIsLoading(false);
        throw err;
    }
    // setIsLoading(false)
    }, []);

    const errorClearer = () => {
        setError(null)
    };

    useEffect (() => {
        return () => {
            activeRequests.current.forEach(abortHttp => abortHttp.abort())
        };
    }, []);

    return {isLoading, error, requestSender, errorClearer}   ;
};