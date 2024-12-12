import NextAuth, { DefaultSession } from "next-auth";

declare module "next-auth" {
    interface Session {
        user: {
            id: string;
            name: string;
            email: string;
        } & DefaultSession["user"];
    }

    interface IUserAuth {
        id: string;
        name: string;
        email: string;
    }
}
