import ServerAuth from "@/lib/serverAuth";
import { NextApiRequest, NextApiResponse } from "next";
import { getServerSession } from "next-auth/next";
import { NextRequest, NextResponse } from "next/server";
import { authOptions } from "../auth/[...nextauth]/route";
import { IncomingMessage, ServerResponse } from "http";
import { AuthOptions } from "next-auth";



export async function GET(req:NextRequest, res:NextResponse) {
    try {
      const session = await ServerAuth(req);
  
      if (!session) {
        return NextResponse.json({
          status: 401,
          statusbar: "error",
          message: "Unauthorized"
        });
      }
    //   if(!session?.user?.email){
  
      return NextResponse.json({
        status: 200,
        statusbar: "success",
        data: session // Assuming you want to send the user data in the response
      });
  
    } catch (error) {
     
      return NextResponse.json({
        status: 500,
        statusbar: "error",
        message: "Internal Server Error"
      });
    }
  }



