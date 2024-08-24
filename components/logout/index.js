import { logout } from "@/lib/actions";
import Css from "./index.module.css"

export default function Logout() {
    return (
        <form action={logout} className={`${Css.main}`}>
            <button type="submit" className={`${Css.main}`}>Log Out</button>
        </form>
    )
}