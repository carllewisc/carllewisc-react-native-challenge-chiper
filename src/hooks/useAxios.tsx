/* eslint-disable react-hooks/exhaustive-deps */
import {useState, useEffect} from 'react';
import api from '../api';
import {HomeProps} from '../ts/interfaces';

// @ts-ignore
interface Props {
  endpoint: string;
}

const useAxios = ({endpoint}: Props) => {
  const [response, setResponse] = useState<HomeProps | null>(null);
  const [error, setError] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const fetchData = async () => {
    setIsLoading(true);
    try {
      const res = await api.get<HomeProps>(`/${endpoint}`);
      setResponse(res.data);
      setError(false);
    } catch (e) {
      setError(true);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return {response, error, isLoading, fetchData};
};

export default useAxios;
