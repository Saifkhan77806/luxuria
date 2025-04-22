'use server';

import { db } from "@/lib/db";

export const register = async () =>{

    await db.user.create({
        data: {
            name: "saif", email: "saifkhan@34534565435gmail.com"
        }
    });

}