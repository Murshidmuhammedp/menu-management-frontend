import React, { useEffect, useState } from 'react';
import api from '../api/axiosInstance';

const useGetMenu = () => {
  const [data, setData] = useState([]); // Initialize with an empty array for menu data
  const [loading, setLoading] = useState(true); // Track loading state
  const [error, setError] = useState(null); // Track error state

  const fetchData = async () => {
    try {
      const response = await api('/api/menus/');
      console.log(response,"resss")
      setData(response?.data?.data);
    } catch (error) {
      setError('Failed to fetch data');
      console.error(error,"error"); // Log error for debugging
    } finally {
      setLoading(false); // Set loading to false after fetch is complete
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return { data, loading, error };
};

export default useGetMenu;
