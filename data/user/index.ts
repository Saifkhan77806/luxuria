import { db } from "@/lib/db"


export const getUserByEmail = (email: string) =>{

    const existingUser = db.user.findUnique({
        where:{
            email
        }
    })

    return existingUser;

}