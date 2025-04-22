import * as zod from 'zod';

export const contactFormSchema = zod.object({
    name: zod.string().min(2, 'Name must be at least 2 characters long'),
    email: zod.string().email('Invalid email'), 
    message: zod.string().min(10, 'Message must be at least 10 characters long'),
    });


export const resgisterSchema = zod.object({

    name: zod.string().min(2, 'Name must be at least 2 characters long'),
    email: zod.string().email('Invalid email'), 
    phone: zod.string().min(10, 'Phone number must be at least 10 characters long'),
    country: zod.string().min(2, 'Country must be at least 2 characters long'),
    password: zod.string().min(8, 'Password must be at least 8 characters long'),
    cpassword: zod.string().min(8, 'Confirm Password must be at least 8 characters long'),
}).refine((data) => data.password === data.cpassword, {
    message: "Passwords don't match",
})