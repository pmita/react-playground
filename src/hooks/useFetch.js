import { useState, useEffect } from 'react';

export const useFetch = (url) => { //We are passing in an options object to deal with fetch requests
  // STATE
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState(null);

  // useEFfect
  useEffect(() => {
    const controller = new AbortController();

    const fetchData = async () => {
      setIsPending(true); 

      try {
        const res = await fetch(url, { signal: controller.signal });
        if (!res.ok) {
          throw new Error(res.statusText);
        }
        const json = await res.json();
        setData(json);
        setIsPending(false);
        setError(null);
      } catch (err) {
        if (err.name === 'AbortError') {
          console.log('Fetch was aborted');
        } else {
          setIsPending(false);
          console.log(err.message);
          setError('Could not fetch data this time');
        }
      }
    }

      fetchData()

      return () => {
        controller.abort();
      };
//Our code is exactly the same as before; but now options is dependency and not _options!
  }, [url]);

  return { data: data, isPending: isPending, error: error };
};