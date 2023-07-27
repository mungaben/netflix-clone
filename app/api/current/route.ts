import ServerAuth from "@/lib/serverAuth";
import { NextApiRequest } from "next";
import { NextRequest, NextResponse } from "next/server";








export async function  GET(req:NextApiRequest, res:NextResponse){
    try{
        const user =ServerAuth(req);
        

    }catch(error){
        return NextResponse.json({
            status: 500,
            statusbar:"error",
            message: "Internal Server Error"
        })
    }

}