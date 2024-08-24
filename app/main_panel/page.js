import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import Css from "./page.module.css"

export default async function Page(){
    if (cookies().get("user")) {
        console.log(cookies().get("user").value);
        let user = JSON.parse(cookies().get("user").value)
        return(
            <div className={`${Css.page_main} center`}>{user.name}</div>
        )
    }else{
        redirect("/")
    }
    
}