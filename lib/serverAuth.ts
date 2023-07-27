import prismaDb from '@/prisma/prismaDb';
import { NextApiRequest } from 'next';
import { getSession } from 'next-auth/react';



// get session



const ServerAuth=async(req:NextApiRequest,)=>{
    const session= await getSession({req});
    if(!session?.user?.email){
      throw new Error("Unauthorized");
    }
    const user= await prismaDb.user.findUnique({
        where: {
            email: session.user.email
        }
    })
    if(!user){
        throw new Error("Unauthorized Not in DB");
    }
    return user;
}
export default ServerAuth;