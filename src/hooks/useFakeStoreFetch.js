import { useEffect } from "react";

export default function useFakeStoreFetch() {

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
        console.log(response);
        //want to store the data in a local object
      });
  }, []);
  
}