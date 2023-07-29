


// all favourite movies

import ServerAuth from "@/lib/serverAuth";
import prismaDb from "@/prisma/prismaDb";
import { getServerSession } from "next-auth/next";
import { NextRequest, NextResponse } from "next/server";
import { authOptions } from "../auth/[...nextauth]/route";
import { redirect } from "next/navigation";


export async function GET(req: NextRequest, res: NextResponse) {
try {
    // check session
    const session = await getServerSession(authOptions);
    if (!session) {
        // redirect user
        return NextResponse.redirect('/AuthUser')
    }
    // get user
  
    // check if user exist
    const user = await prismaDb.user.findUnique({
        where: {
            email: session?.user?.email ||""
        }
    })
    if (!user) {
        // redirect to AuthUser
        return NextResponse.redirect('/AuthUser')
    }
    // get all favourite movies by user id
//   get all favourite movies by user id
    const movies = await prismaDb.movie.findMany({
        where: {
            id: {
                in: user.favoriteIds
            }
        },
    })
    console.log('====================================');
    console.log("SERVER SESSION in favourite movies in Favourite route", movies);
    console.log('====================================');
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
    });

    
}
}