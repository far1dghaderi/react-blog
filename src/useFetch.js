import { useEffect, useState } from "react";

const useFetch = (url) => {
  const [data, setBlogs] = useState(null);
  const [isPending, setPending] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const abortController = new AbortController();
    fetch(url, { signal: abortController.signal })
      .then((res) => {
        if (!res.ok) {
          throw new Error("could not fetch the data");
        }
        return res.json();
      })
      .then((data) => {
        setTimeout(() => {
          setBlogs(data);
          setPending(false);
          setError(null);
        }, 1000);
      })
      .catch((err) => {
        if (err.message !== "AbortError") {
          console.log("abort error");
        } else {
          setError(err.message);
          setPending(false);
        }
      });
    return () => {
      abortController.abort();
    };
  }, [url]);
  return { data, isPending, error };
};

export default useFetch;
