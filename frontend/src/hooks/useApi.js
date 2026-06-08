import { useState, useCallback } from 'react';
import axios from 'axios';
import toast from 'react-hot-toast';

export const useApi = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const request = useCallback(async (config) => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios(config);
      return { success: true, data: response.data };
    } catch (err) {
      const message = err.response?.data?.message || 'Something went wrong';
      setError(message);
      toast.error(message);
      return { success: false, error: message };
    } finally {
      setLoading(false);
    }
  }, []);

  return { loading, error, request };
};