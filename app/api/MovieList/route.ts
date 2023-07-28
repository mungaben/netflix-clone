


// get all movies

import ServerAuth from "@/lib/serverAuth";
import prismaDb from "@/prisma/prismaDb";
import { getServerSession } from "next-auth/next";
import { NextRequest, NextResponse } from "next/server";
import { authOptions } from "../auth/[...nextauth]/route";
import { redirect } from "next/navigation";

export async function GET(req: NextRequest, res: NextResponse) {
    try {
        const session = await getServerSession(authOptions);
        console.log('====================================');
        console.log("SERVER SESSION",session?.user?.email);
        console.log('====================================');
        if (!session) {
            // redirect user
            return NextResponse.redirect('/AuthUser')
        }
        await ServerAuth(req);
        
        const movies = await prismaDb.movie.findMany({})
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