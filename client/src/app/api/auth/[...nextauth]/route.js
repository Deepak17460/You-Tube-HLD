import NextAuth from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';
import { config } from 'dotenv';

// Load environment variables from .env file
config();

export default NextAuth({
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        }),
        // Add other providers as needed
    ],
    secret: process.env.NEXTAUTH_SECRET,
    session: {
        jwt: true,
    },
    // Other configuration options
});
