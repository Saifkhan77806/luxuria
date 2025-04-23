'use server';

import { getUserByEmail } from "@/data/user";
import { db } from "@/lib/db";
import { resgisterSchema } from "@/schemas";
import bcrypt from 'bcryptjs'
import * as z  from "zod";

export const register = async (values: z.infer<typeof resgisterSchema>) =>{

    const validationResult = resgisterSchema.safeParse(values);

    if (!validationResult.success) {
        return {error: "Invalid fields"}
        } 

        const {name, email, password, cpassword, country, phone} = validationResult.data

        if (password !== cpassword) {
            return {error: "please password and confirm password as same as"}
        }

        const existingUser = await getUserByEmail(email)

        if(existingUser){
            return {error: "User with this email already exists"}
        }

        const hashedPassword = await bcrypt.hash(password, 10)




    await db.user.create({
        data: {
            name, email, phone, password: hashedPassword, country
        }
    });

    return {success: "User registered successfully"}

}