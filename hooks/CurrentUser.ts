



import fetcher from '@/lib/fetcher'
import useSwr from 'swr'



const UseCurrentUser = () => {
    const { data, error ,isLoading,mutate} = useSwr('/api/current', fetcher)
    return {
        data,
        error,
        isLoading,
        mutate
        
    }
}

