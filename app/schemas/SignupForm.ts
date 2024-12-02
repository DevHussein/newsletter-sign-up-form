import { z } from 'zod';

export const signupFormSchema = z.object({
    email: z.string().email({ message: 'Valid email required' }),
});

export type SignupForm = z.infer<typeof signupFormSchema>;
export const defaultValues: SignupForm = {
    email: '',
};