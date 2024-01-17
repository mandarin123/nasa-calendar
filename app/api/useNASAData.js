'use client'
import { subMonths, format } from 'date-fns';
import { useState, useEffect } from 'react';

const API_KEY = '3LZ9wIGjVx7Bg4UQ6BhKXxHFIaBcQmXbGReYBHMB';

const useNASAData = () => {
  const [nasaData, setNasaData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();

  let startDate = '2023-12-01'
  let endDate = '2023-12-31'

  // const subMonths2 = () => {
  //   startDate = format(subMonths(new Date(startDate), 1), 'yyyy-MM-dd')
  //   endDate = format(subMonths(new Date(endDate), 1), 'yyyy-MM-dd')
  //   fetchData(startDate, endDate)
  // }

  const fetchData = async (startDate, endDate) => {
    try {
      const apiUrlWithDates = `https://api.nasa.gov/planetary/apod?api_key=${API_KEY}&start_date=${startDate}&end_date=${endDate}`;
      const response = await fetch(apiUrlWithDates);
      const data = await response.json();
      setNasaData(data);
      setLoading(false);
    } catch (error) {
      setError(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData(startDate, endDate);
  }, [startDate]);

  return { nasaData, loading, error, fetchData };
};

export default useNASAData;