'use client'
import { useState, useEffect } from 'react';

const API_KEY = '3LZ9wIGjVx7Bg4UQ6BhKXxHFIaBcQmXbGReYBHMB';
const API_URL = `https://api.nasa.gov/planetary/apod?api_key=${API_KEY}&start_date=2023-12-01&end_date=2023-12-31`;

const useNASAData = () => {
  const [nasaData, setNasaData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(API_URL);
        const data = await response.json();
        setNasaData(data);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return { nasaData, loading, error };
};

export default useNASAData;