import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import prismaDb from '@/prisma/prismaDb';
import { NextApiRequest, NextApiResponse } from 'next';
import { getServerSession } from 'next-auth/next';
import { getSession } from 'next-auth/react';
import { NextRequest, NextResponse } from 'next/server';
import { redirect } from 'next/navigation'


// get session



const ServerAuth = async (res: NextRequest) => {

    const session = await getServerSession(authOptions);

    if (!session) {
        return NextResponse.json({
            message: "not authorized"
        })
    }
    if (!session?.user?.email) {
        return NextResponse.json({
            message: "not authorized"
        })
    }
    const user = await prismaDb.user.findUnique({
        where: {
            email: session.user.email
        }
    })
   
    if (!user) {
        // redirect to AuthUser
       return null
    }
   
   
    console.log('====================================');
    console.log(user);
    console.log('====================================');
    return user;
}
export default ServerAuth;