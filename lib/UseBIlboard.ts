import useSWR from "swr"
import fetcher from "./fetcher"




const UseBillBoard=()=>{
    const {data,isLoading,error}=useSWR('/api/Movies',fetcher,{
        revalidateIfStale:false,
        revalidateOnFocus:false,
        revalidateOnReconnect:false,

    })
    return{
        data,
        isLoading,
        error
    }
}
export default UseBillBoard;