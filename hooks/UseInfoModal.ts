


// use Zustand

import { create } from 'zustand'
import { Movie } from '../types';


 

interface InfoModalState {
    MovieId:string;
    isOpen:boolean;
    openModel:(MovieId:string) => void;
    closeModel:() => void;


}
// define hooks


const UseInfoModal = create<InfoModalState>((set) => ({
    MovieId:'',
    isOpen:false,
    openModel:(MovieId:string) => set(() => ({
        MovieId,
        isOpen:true
    })),
    closeModel:() => set(() => ({
        MovieId:'',
        isOpen:false
    }))
}))



export default UseInfoModal