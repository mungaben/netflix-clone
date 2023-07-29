







import fetcher from '@/lib/fetcher'
import useSWR from 'swr';





const FavouriteMovies= () => {
  const { data, error, isLoading, mutate } = useSWR('/api/Favourite', fetcher);

  return {
    data,
    error,
    isLoading,
    mutate,
  };
};

export default FavouriteMovies;


