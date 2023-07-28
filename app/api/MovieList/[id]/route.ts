





// geyt params fro url
// get movie list by id


import ServerAuth from "@/lib/serverAuth";
import prismaDb from "@/prisma/prismaDb";

import { NextRequest, NextResponse } from "next/server";
import CurrentUser from '@/hooks/CurrentUser';
import { getServerSession } from "next-auth/next";
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
        const movies = await prismaDb.movie.findMany({
            where: {
                 id:id
            }
        })
        return NextResponse.json({
            status: 200,
            statusbar: "success",
            data: movies
        })
    } catch (error) {
        return NextResponse.json({
            status: 500,
            statusbar: "error",
            message: "Internal Server Error"

        })
    }
}


// post movie list by id
export async function POST(req: NextRequest,{params}:{params:Idtype},res: NextResponse) {

    try{
        const session = await getServerSession(authOptions)
        if(!session){
            return NextResponse.redirect('/AuthUser')
        }
        const {id}= params;

        const user= await ServerAuth(req);
    

    }catch(error){
        return NextResponse.json({
            status: 500,
            statusbar: "error",
            message: "Internal Server Error"
    })
    }
}