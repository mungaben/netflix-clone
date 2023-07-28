








import fetcher from '@/lib/fetcher'
import useSWR from 'swr';





const MoviesListHook = () => {
  const { data, error, isLoading, mutate } = useSWR('/api/MovieList', fetcher);

  return {
    data,
    error,
    isLoading,
    mutate,
  };
};

export default MoviesListHook 


