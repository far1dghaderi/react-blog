import { useEffect, useState } from "react";

const useFetch = (url) => {
  const [data, setBlogs] = useState(null);
  const [isPending, setPending] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(url)
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
        setError(err.message);
        setPending(false);
      });
  }, []);
  return { data, isPending, error };
};

export default useFetch;
