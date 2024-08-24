import { getChtannelByID } from '@/lib/data'
import Css from './page.module.css'
import MessageList from '@/components/message_list'
import MessageInput from '@/components/message_input'

export default function Page({ params }) {
  console.log(params)
  let channel = getChtannelByID(parseInt(params.id))
  console.log(channel)
  return (
    <>
      <div className={`${Css.channelName}`}>{channel.name}</div>
      <div className={`${Css.message_list}`}>
        <MessageList channelId={parseInt(params.id)} />
      </div>
      <div className={`${Css.message_input}`}>
        <MessageInput channelId={parseInt(params.id)} />
      </div>
    </>
  )
}
