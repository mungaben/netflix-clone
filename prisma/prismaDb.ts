



import { PrismaClient } from '@prisma/client'

declare global {
    namespace globalThis{
         var prismaDb: PrismaClient
     }
 }

const client =globalThis.prismaDb || new PrismaClient()
if (process.env.NODE_ENV === 'production') globalThis.prismaDb = client

export default client