




// post user register

// Path: netflix/app/api/register/route.ts

import prismaDb from "@/prisma/prismaDb";
import { NextApiRequest, NextApiResponse } from "next";
import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcrypt";

export async function POST(req: NextRequest, res: NextApiResponse){
  
  
     const body= await req.json()
    const {email, password, name} = body;
   
    try{
        // check if password is empty
        if(!password){
            return NextResponse.json({
                status: 400,
                message: "Password is required",
                statusbar: "error"
            })
        }
        // check if email is empty
        if(!email){
            return NextResponse.json({
                status: 400,
                message: "Email is required",
                statusbar: "error"
            })
        }
        // check if name is empty
        if(!name){
            return NextResponse.json({
                status: 400,
                message: "Name is required",
                statusbar: "error"
            })
        }
        // check if email is already taken
        const user= await prismaDb.user.findUnique({
            where: {
                email: email
            }
        })
        if(user){
            return NextResponse.json({
                status: 400,
                message: "Email already taken",
                statusbar: "error"
            })

        }
        // hash the paswword
        const hashedPassword= await bcrypt.hash(password, 10);
        // create user
        const newUser= await prismaDb.user.create({
            data: {
                email: email,
                name: name,
                hashedPassword: hashedPassword,
                image: "",
                emailVerified:new Date(),
            }
        })
        // return user
        return NextResponse.json({
            status: 200,
            message: "User created successfully",
            statusbar: "success",
            data: newUser
        })

   }catch(err){
       return NextResponse.json({
              status: 500,
                message: "error",
                statusbar: "error"
         })

   }
}