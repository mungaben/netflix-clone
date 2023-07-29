















import fetcher from '@/lib/fetcher'
import useSWR from 'swr';


 interface MovieId{
   id?: string
 }
// get single movie by id in MovieList

const SingleMoviesHook = (id:MovieId) => {
    // check id is a string
    if (typeof id.id !== 'string') {
      throw new Error('id is not a string');
    }
   
    const { data, error, isLoading, mutate } = useSWR(`/api/MovieList/${id.id}`, fetcher);
    return {
      data,
      error,
      isLoading,
      mutate,
    };
  };
export default SingleMoviesHook;


