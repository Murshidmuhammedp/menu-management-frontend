import React, { useEffect, useState } from 'react';
import api from '../api/axiosInstance';

const useGetMenu = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    try {
      const response = await api('/api/menus/');
      setData(response?.data?.data);
    } catch (error) {
      setError('Failed to fetch data');
      console.error(error, "error");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return { data, loading, error };
};

export default useGetMenu;
