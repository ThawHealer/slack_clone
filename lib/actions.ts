"use server";
import { z } from "zod";
import { supabase } from "./supabase_layer";
import { redirect } from 'next/navigation';
import { cookies } from "next/headers";

const loginSchema = z.object({
    email: z.string({invalid_type_error: 'Invalid Email'}).email(),
    password: z.string(),
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
    const { data , error } = await supabase.auth.signInWithPassword({email: validatedData.data.email, password: validatedData.data.password})
    console.log(data, error);
    if (error) {
        return { message: error.message }
    }
    cookies().set('supabase.auth.token', data.session.access_token, { path: '/' , secure: true, sameSite: 'strict' })
    cookies().set('user', JSON.stringify(data.user), { path: '/' , secure: true, sameSite: 'strict' })
    redirect('/main_panel')
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
    const { data , error } = await supabase.auth.signUp({email: validatedData.data.email, password: validatedData.data.password})
    console.log(data, error);
    if (error) {
        return { message: error.message }
    }
}