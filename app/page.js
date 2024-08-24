"use client";
import { useState } from "react"
import Css from "./page.module.css"
import AuthForm from "@/components/auth_form/index"

export default function Page() {
  const [state, setState] = useState("login")
  return (
    <div className={`${Css.main} center`}>
      <div className={`${Css.auth_sector} center`}>
        <div className={`${Css.selector}`}>
          <div onClick={() => setState("login")}>
            Login
          </div>
          <div onClick={() => setState("signup")}>
            Sign up
          </div>
        </div>

        <AuthForm authType={state} />
      </div>
    </div>
  )
}