



// post movies

import prismaDb from "@/prisma/prismaDb";
import { NextRequest, NextResponse } from "next/server";



// Path: netflix/app/api/Movies/route.ts

export async function POST(req: NextRequest, res: NextResponse) {

    const body = await req.json();

    const { title, description, videoUrl, thumbnailUrl, genre, duration } = body;
    try {
        // check if title is available
        if (!title) {
            return NextResponse.json({
                status: 400,
                statusbar: "error",
                message: "Title is required"
            })
        }
        // check if description is available

        if (!description) {
            return NextResponse.json({
                status: 400,
                statusbar: "error",
                message: "Description is required"
            })
        }
        // check if videoUrl is available

        if (!videoUrl) {
            return NextResponse.json({
                status: 400,
                statusbar: "error",
                message: "Video Url is required"
            })
        }
        // check if thumbnailUrl is available

        if (!thumbnailUrl) {
            return NextResponse.json({
                status: 400,
                statusbar: "error",
                message: "Thumbnail Url is required"
            })
        }
        // check if genre is available

        if (!genre) {
            return NextResponse.json({
                status: 400,
                statusbar: "error",
                message: "Genre is required"
            })
        }
        // check if duration is available

        if (!duration) {
            return NextResponse.json({
                status: 400,
                statusbar: "error",
                message: "Duration is required"
            })
        }

        // check if movie already exist

        const movie = await prismaDb.movie.findFirst({
            where: {
                title: title
            }
        })
        // if movie exist
        if (movie) {
            return NextResponse.json({
                status: 400,
                statusbar: "error",
                message: "Movie already exist"
            })
        }
        // if movie does not exist
        const newMovie = await prismaDb.movie.create({
            data: {
                title: title,
                description: description,
                videoUrl: videoUrl,
                thumbnailUrl: thumbnailUrl,
                genre: genre,
                duration: duration
            }
        })
        return NextResponse.json({
            status: 200,
            statusbar: "success",
            data: newMovie
        })





    } catch (error) {
        return NextResponse.json({
            status: 500,
            statusbar: "error",
            message: "Internal Server Error"

        })

    }

}