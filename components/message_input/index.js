import { sendMessage } from '@/lib/actions'
import { cookies } from 'next/headers'
import Css from './index.module.css'

export default function MessageInput({ channelId }) {
    return (
        <form action={sendMessage} className={`${Css.main}`}>
            <input type="text" name="message" />
            <input type="hidden" name="channelId" value={channelId} />
            <input type="hidden" name="userId" value={JSON.parse(cookies().get('user').value).id} />
            <button type="submit">Send</button>
        </form>
    )
}