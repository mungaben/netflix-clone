// // middleware.ts
// import { getToken } from "next-auth/jwt";
// import { NextRequest, NextResponse } from "next/server";
// // paths that require authentication or authorization
// const requireAuth: string[] = ["/admin"];
// export async function middleware(request: NextRequest) {
//     const res = NextResponse.next();
//     const pathname = request.nextUrl.pathname;
//     const token = await getToken({
//         req: request,
//         secret: process.env.SECRET,
//     });



//     //check not logged in
//     if (!token) {

//         const url = new URL(`/AuthUser`, request.url);
       
        
//         return NextResponse.redirect(url.href);
//     }

//     //check if logged in
//     if (token) {
//         // const url = new URL(`/AuthUser`, request.url);
//         return NextResponse.next();
//     }
// }

// // matcher
// export const config = {
//     matcher: ['/','/api'],
//   }



export { default } from "next-auth/middleware"




export const config = { matcher: [] }