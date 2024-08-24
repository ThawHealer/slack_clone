import { getUserNameByMessageID } from "@/lib/data"
import Css from "./index.module.css"

export default function MessageItem({ message }) {
    let name = getUserNameByMessageID(message.id)
    
    return (
        <div className={`${Css.main}`}>
            <div>{message.message}</div>
            <div>sent by {name}</div>
        </div>
    )
}