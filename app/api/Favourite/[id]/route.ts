import prismaDb from "@/prisma/prismaDb";
import { getServerSession } from "next-auth";
import { NextRequest, NextResponse } from "next/server";
import { authOptions } from "../../auth/[...nextauth]/route";






type Idtype={
    id:string
}

export async function GET(req: NextRequest,{params}:{params:Idtype},res: NextResponse) {
    try {
        const session = await getServerSession(authOptions)
        if(!session){
            return NextResponse.redirect('/AuthUser')
        }
       
        const {id}= params;
// check if favourite movies for user.id exists in user.favoritesIds
        const user = await prismaDb.user.findUnique({
            where:{
                email:session?.user?.email ||''

            }
        })
        if(!user){
            return NextResponse.redirect('/AuthUser')
        }
        const MoviesData= await prismaDb.user.findMany({
            where:{
                id:user?.id,
                favoriteIds:{
                    has:id
                }
            }

        });



        

    
        return NextResponse.json({
            status: 200,
            statusbar: "success",
            data: MoviesData
        })
    } catch (error) {
        return NextResponse.json({
            status: 500,
            statusbar: "error",
            message: "Internal Server Error"

        })
    }
}