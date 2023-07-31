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



import { getToken } from 'next-auth/jwt';
import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';

 
export async function middleware(request: NextRequest) {
    // const session = await getServerSession({ req: request, ...authOptions })


    // console.log('====================================');
    // console.log("session available",session);
    // console.log('====================================');
    const secret = process.env.NEXTAUTH_JWT_SECRET;
    if (secret === undefined) {
        console.error("NEXT_AUTH_SECRET environment variable is not set.");
        process.exit(1); // Optional: Exit the process if the secret is not set.
      }

    const token = await getToken({
                req: request,
                secret: secret,
               
            });

            // const payload = jwt.verify(token);
       
        
        
        
            //check not logged in
            if (!token && request.nextUrl.pathname != "/AuthUser") {
        
                const url = new URL(`/AuthUser`, request.url);
               
                
                return NextResponse.redirect(url.href);
            }


          

//   if (request.nextUrl.pathname.startsWith('/about')) {
//     return NextResponse.rewrite(new URL('/about-2', request.url))
//   }
 
//   if (request.nextUrl.pathname.startsWith('/dashboard')) {
//     return NextResponse.rewrite(new URL('/dashboard/user', request.url))
//   }
}


export const config = {
    matcher: ['/Profiles/:path*', '/NavBar/:path*','/Api/:path*','/watch/:path*','/'],
  }