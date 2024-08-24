'use server';
import { z } from "zod";
import { redirect } from 'next/navigation';
import { cookies } from "next/headers";
import { validateUser , addUser , addMessage, messages } from "./data";

const generateId = () => {
    return Math.random().toString(36).substr(2, 9) + Date.now().toString(36);
  };

const loginSchema = z.object({
    email: z.string({invalid_type_error: 'Invalid Email'}).email(),
    password: z.string(),
});

const messageSchema = z.object({
    id: z.number({invalid_type_error: 'Invalid ID'}),
    message: z.string({invalid_type_error: 'Invalid Message'}),
    channel_id: z.number({invalid_type_error: 'Invalid Channel ID'}),
    user_id: z.number({invalid_type_error: 'Invalid User ID'}),
});

export async function yolo(formData: FormData) {
    console.log(formData)
    return { message: 'Please enter a valid email' }
}

export async function login(formData: FormData) {
    const validatedData = loginSchema.safeParse({
        email: formData.get('email'),
        password: formData.get('password'),
    });
    if (!validatedData.success) {
        return {
            errors: validatedData.error.flatten().fieldErrors,
          }
    }
    if (validateUser(validatedData.data.email, validatedData.data.password)) {
        cookies().set('user', JSON.stringify(validateUser(validatedData.data.email, validatedData.data.password)), { path: '/' , secure: true, sameSite: 'strict' })
        redirect('/main_panel')
    }
    else {
        redirect('/')
    }
    // const { data , error } = await supabase_client.auth.signInWithPassword({email: validatedData.data.email, password: validatedData.data.password})
    
    // cookies().set('supabase.auth.token', data.session.access_token, { path: '/' , secure: true, sameSite: 'strict' })
    // cookies().set('user', JSON.stringify(data.user), { path: '/' , secure: true, sameSite: 'strict' })
}

export async function signUp(formData: FormData) {
    const validatedData = loginSchema.safeParse({
        email: formData.get('email'),
        password: formData.get('password'),
    });
    if (!validatedData.success) {
        return {
            errors: validatedData.error.flatten().fieldErrors,
          }
    }
    addUser({id: 1, email: validatedData.data.email, password: validatedData.data.password})
    cookies().set('user', JSON.stringify({email: validatedData.data.email}), { path: '/' , secure: true, sameSite: 'strict' })
    redirect('/main_panel')
}

export async function logout(formData: FormData) {
    cookies().delete('user')
    redirect('/')
}

export async function sendMessage(formData: FormData) {
    console.log(formData);
    
    const validatedData = messageSchema.safeParse({
        id: messages.length,
        message: formData.get('message'),
        channel_id: parseInt(formData.get('channelId')),
        user_id: parseInt(formData.get('userId')),
    });
    
    addMessage(validatedData.data)
    // addMessage({id: 1, message: formData.get('message'), channel_id: parseInt(formData.get('channelId')), user_id: parseInt(formData.get('userId'))})
}