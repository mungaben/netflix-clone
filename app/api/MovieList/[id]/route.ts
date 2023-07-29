





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
        console.log('====================================');
        console.log("SERVER SESSION in Movielist Get REquest", session?.user?.email);
        console.log('====================================');

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
        console.log('====================================');
        console.log("SERVER SESSION in post movielist", session?.user?.email);
        console.log('====================================');
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
        console.log('====================================');
        console.log("SERVEr movie in post movielist", movie);
        console.log('====================================');
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
        console.log('====================================');
        console.log("USER FAVORITE MOVIES IN POST MOVIELIST movie cliecked already in favorite movies", updatedFavoriteIds);
        console.log('====================================');
        if (updatedFavoriteIds.length > 0) {
            return NextResponse.json({
                status: 404,
                statusbar: "error",
                message: "favorite movie added already"
            })
        }
        console.log('====================================');
        console.log("UPDATED USER in movielist post", updatedFavoriteIds,"posted id",movie.id);
        console.log('====================================');
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
        console.log('====================================');
        console.log("UPDATE USER in movie in post list", updateUser);
        console.log('====================================');

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
console.log('====================================');
console.log("UPDATED USER in Delete in   movielist", updatedFavoriteIds);
console.log('====================================');
        const updatedUser = await prismaDb.user.update({
            where: {
                email:user.email ||""
            },
            data: {
                favoriteIds: updatedFavoriteIds,
            }
        });
        console.log('====================================');
        console.log("UPDATED USER after update  in delete in movelist", updatedUser);
        console.log('====================================');
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