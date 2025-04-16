import { useEffect } from "react";

export default function useFakeStoreFetch(setState, setLoading, setError) {

  useEffect(() => {
    const url = "https://fakestoreapi.com/products";

      fetch(url)
        .then(response => {
          if (!response.ok) {
            throw new Error(`Request to ${response.url} failed: HTTP ${response.status} : ${response.statusText}`);
          };
          return response.json();
        })
        .then((response) => {
          setState(response);
          setLoading(false);
        });
    }, []);
}