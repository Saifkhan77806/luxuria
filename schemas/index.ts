import * as zod from 'zod';

export const contactFormSchema = zod.object({
    name: zod.string().min(2, 'Name must be at least 2 characters long'),
    email: zod.string().email('Invalid email'), 
    message: zod.string().min(10, 'Message must be at least 10 characters long'),
    });


export const registerFormSchema = zod.object({
firstName: zod.string().min(2, 'First name must be at least 2 characters long'),
lastName: zod.string().min(2, 'Last name must be at least 2 characters long'),
email: zod.string().email('Invalid email'),
password: zod.string().min(8, 'Password must be at least 8 characters long'),
})