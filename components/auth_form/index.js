"use client";
import Css from "./index.module.css"
import { useActionState } from 'react';
import { login , signUp } from "@/lib/actions";

export default function AuthForm(props) {
    return (
        <form className={`${Css.main} center`} action={props.authType === "login" ? login : props.authType === "signup" ? signUp : null}>
            <div>Email</div>
            <input type="email" name="email" />
            <div>Password</div>
            <input type="password" name="password" />
            <div>
                {props.authType === "signup" && (<button type="submit">Sign Up</button>)}
                {props.authType === "login" && (<button type="submit">Log In</button>)}
            </div>
        </form>
    )
}