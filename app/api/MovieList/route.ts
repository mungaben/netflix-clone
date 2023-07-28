


// get all movies

import ServerAuth from "@/lib/serverAuth";
import prismaDb from "@/prisma/prismaDb";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest, res: NextResponse) {
    try {
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