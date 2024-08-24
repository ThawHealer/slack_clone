import MessageItem from "../message_item";
import { getMessagesByChannelID } from "@/lib/data";

export default function MessageList({ channelId }) {
    let messages = getMessagesByChannelID(channelId)
    console.log(messages)
    return (
        <div>
            {messages.map(message => (
                <MessageItem key={message.id} message={message} />
            ))}
        </div>
    )
}