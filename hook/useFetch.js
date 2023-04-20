import { useState , useEffect } from "react";
import axios from 'axios';

const useFetch =() => {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const axios = require("axios");

useEffect(() => {
const fetchData = async () => {
    setIsLoading(true);
    try {
      const response = await fetch('https://shazam.p.rapidapi.com/charts/track', {
        headers: {
          'x-rapidapi-host': 'shazam.p.rapidapi.com',
          'x-rapidapi-key': '214e8ae2c7msh30ed631ddab79dcp1bf6a4jsn61fe676cb1cc'
        }
      });
      const cutloss = await response.json();
      setData(cutloss.tracks);
      setIsLoading(false);
    } catch (error) {
        setError(error);
        alert('There is an error');
    }finally {
        setIsLoading(false);
    }
}
 fetchData();
}, []);

    const refetch = ()=>{
        setIsLoading(true);
        fetchData();
    }
    return {data, isLoading, error, refetch};
}
export default useFetch;


