import { useState, useEffect } from 'react';

const useFetch = (url) => {
  //Data, isPending, error hooks here
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);
  //Use effect in action in 1000ms
  useEffect(() => {
    //AbortCont used as a method putting in a const variable
    const abortCont = new AbortController();
    //When not fetching comes the signal
    setTimeout(() => {
      fetch(url, { signal: abortCont.signal })
      .then(res => {
        if (!res.ok) { // error throwing
          throw Error('Could not fetch');
        } 
        //Else return in json format
        return res.json();
      })
      .then(data => {
        setIsPending(false);
        setData(data);
        setError(null);
      })
      //In the following in case of error comes this
      .catch(err => {
        if (err.name === 'AbortError') {
          console.log('fetch aborted')
        } else {
          // Pending set to false and comes err message
          setIsPending(false);
          setError(err.message);
        }
      })
    }, 1000);

    // Canceling the fetch
    return () => abortCont.abort();
  }, [url])

  return { data, isPending, error };
}
 
export default useFetch;