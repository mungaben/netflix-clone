





// geyt params fro url
// get movie list by id


import ServerAuth from "@/lib/serverAuth";
import prismaDb from "@/prisma/prismaDb";

import { NextRequest, NextResponse } from "next/server";
import CurrentUser from '@/hooks/CurrentUser';
import { getServerSession } from "next-auth/next";
import { authOptions } from "../../auth/[...nextauth]/route";
import { without } from "lodash";

type Idtype = {
    id: string
}

export async function GET(req: NextRequest, { params }: { params: Idtype }, res: NextResponse) {
    try {
        const session = await getServerSession(authOptions)
        if (!session) {
            return NextResponse.redirect('/AuthUser')
        }
      
        const { id } = params;

        const movies = await prismaDb.movie.findMany({
            where: {
                id: id
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
export async function POST(req: NextRequest, { params }: { params: Idtype }, res: NextResponse) {

    try {
        const session = await getServerSession(authOptions)
        if (!session) {
            return NextResponse.redirect('/AuthUser')
        }
        const { id } = params;
        // get user by email in db
        const user = await prismaDb.user.findUnique({
            where: {
                email: session?.user?.email || ''
            }
        })
       
        // no user found
        if (!user) {
            return NextResponse.json({
                status: 404,
                statusbar: "error",
                message: "User Not Found"
            })
        }
        // check movie exists
        const movie = await prismaDb.movie.findUnique({
            where: {
                id: id
            }
        })
      
        // no movie found
        if (!movie) {
            return NextResponse.json({
                status: 404,
                statusbar: "error",
                message: "Movie Not Found"
            })
        }

        //  check if id is in user's favourite list
        const userFavoriteIds = user.favoriteIds;
        const updatedFavoriteIds = Array.from(userFavoriteIds).filter((id) => id === movie.id);
     
        if (updatedFavoriteIds.length > 0) {
            return NextResponse.json({
                status: 404,
                statusbar: "error",
                message: "favorite movie added already"
            })
        }
     
        // update user favourite movies
        const updateUser = await prismaDb.user.update({
            where: {
                id: user.id
            },
            data: {
                favoriteIds: {
                    push: movie.id
                }
            }
        })
     

        return NextResponse.json({
            status: 200,
            statusbar: "success",
            data: updateUser
        })






    } catch (error) {
        return NextResponse.json({
            status: 500,
            statusbar: "error",
            message: "Internal Server Error"
        })
    }
}













// delete a movie from favourite list
export async function DELETE(req: NextRequest, { params }: { params: Idtype }, res: NextResponse) {
    try {
        const session = await getServerSession(authOptions)
        if (!session) {
            return NextResponse.redirect('/AuthUser')
        }
        const { id } = params;
        // get user by email in db
        const user = await prismaDb.user.findUnique({
            where: {
                email: session?.user?.email || ''
            }
        })
        // no user found
        if (!user) {
            return NextResponse.json({
                status: 404,
                statusbar: "error",
                message: "User Not Found"
            })
        }
        // check movie exists
        const movie = await prismaDb.movie.findUnique({
            where: {
                id: id
            }
        })
        // no movie found
        if (!movie) {
            return NextResponse.json({
                status: 404,
                statusbar: "error",
                message: "Movie Not Found"
            })
        }


        // update user favourite movies by removing the movie id.
        const updatedFavoriteIds = Array.from(user.favoriteIds).filter((id) => id !== movie.id);

        const updatedUser = await prismaDb.user.update({
            where: {
                email:user.email ||""
            },
            data: {
                favoriteIds: updatedFavoriteIds,
            }
        });
    
        return NextResponse.json({
            status: 200,
            statusbar: "success",
            data:updatedUser
        })






    } catch (error) {
        return NextResponse.json({
            status: 500,
            statusbar: "error",
            message: "Internal Server Error"
        })
    }
}