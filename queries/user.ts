'use server';
import { db } from "@/lib/db";

interface CreateUserParams {
    email: string;
    username?: string;
    profileUrl?: string;
}



export const createUser = async ({ email, username, profileUrl }: CreateUserParams) => {

    try {
        await db.user.create({
            data: {
                email,
                username,
                profilePicture: profileUrl,
            }
        })

        return 'User created successfully';

    } catch (error: unknown) {
        return error instanceof Error ? error.message : 'An unknown error occurred during user creation.';
    }


}
