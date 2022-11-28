import { useState, useCallback, useRef, useEffect } from 'react';

export const useHttpClient = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState();

  const activeHttpRequests = useRef([]);

  const sendRequest = useCallback(
    async (url, method = 'GET', body = null, headers = {}) => {
      setIsLoading(true);
      const httpAbortCtrl = new AbortController();
      activeHttpRequests.current.push(httpAbortCtrl);

      try {
        const response = await fetch(url, {
          method,
          body,
          headers,
          signal: httpAbortCtrl.signal
        });

        const responseData = await response.json();

        activeHttpRequests.current = activeHttpRequests.current.filter(
          reqCtrl => reqCtrl !== httpAbortCtrl
        );

        if (!response.ok) {
          throw new Error(responseData.message);
        }

        setIsLoading(false);
        return responseData;
      } catch (err) {
        setError(err.message);
        setIsLoading(false);
        throw err;
      }
    },
    []
  );

  const clearError = () => {
    setError(null);
  };

  useEffect(() => {
    return () => {
      // eslint-disable-next-line react-hooks/exhaustive-deps
      activeHttpRequests.current.forEach(abortCtrl => abortCtrl.abort());
    };
  }, []);

  return { isLoading, error, sendRequest, clearError };
};














// import { useState, useCallback, useRef, useEffect } from 'react';
// import axios from 'axios';

// export const useHttp = () => {
//     const [isLoading, setIsLoading] = useState(false);
//     const [error, setError] = useState();
//     const activeRequests = useRef([]);

//     const requestSender = useCallback( 
//         async (url, method = 'GET', body = null, headers = {}) => {
//         setIsLoading(true)
//         const abortHttp = new AbortController();
//         activeRequests.current.push(abortHttp)

//     try {
//         const response = await fetch(url, console.log(url), {
//             method,
//             body,
//             headers,
//             signal: abortHttp.signal
//         }, )
//             const responseInfo = await response.json();
//             activeRequests.current = activeRequests.current.filter(
//                 ctrl => ctrl !== abortHttp
//             );
//             if (!response.ok) {
//                 throw new Error(responseInfo.message)
//             }
//             setIsLoading(false)
//             return responseInfo
//         } catch (err) {
//         setError(err.message);
//         setIsLoading(false);
//         throw err;
//     }
//     }, []);

//     const errorClearer = () => {
//         setError(null)
//     };

//     useEffect (() => {
//         return () => {
//             activeRequests.current.forEach(abortHttp => abortHttp.abort())
//         };
//     }, []);

//     return {isLoading, error, requestSender, errorClearer}   ;
// };