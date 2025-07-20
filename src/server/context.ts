import * as trpcNext from '@trpc/server/adapters/next';
import { JwtPayload, verify } from "jsonwebtoken";

// import { decodeAndVerifyJwtToken } from './somewhere/in/your/app/utils';

interface AppJWTPayload extends JwtPayload {
    id: string;
}

export async function createContext({
    req,
    
}: trpcNext.CreateNextContextOptions) {
    // Create your context based on the request object
    // Will be available as `ctx` in all your resolvers
    // This is just an example of something you might want to do in your ctx fn
    async function getUserFromHeader() {
        const secret = process.env.SECRET;
        const { ID } = req.cookies;

        // ID is not present.
        if (!ID || !secret) {
            return null;
        }

        const decoded = verify(ID, secret) as AppJWTPayload;

        console.log(decoded.id);
        // TODO: Fetch User by id from database.

        return null;
    }
    const user = await getUserFromHeader();
    return {
        user,
    };
}
export type Context = Awaited<ReturnType<typeof createContext>>;