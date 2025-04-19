import * as zod from 'zod';

export const contactFormSchema = zod.object({
    name: zod.string().min(2, 'Name must be at least 2 characters long'),
    email: zod.string().email('Invalid email'), 
    message: zod.string().min(10, 'Message must be at least 10 characters long'),
    });
