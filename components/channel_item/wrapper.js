import ChannelItem from './index'
import { channels } from '@/lib/data'

export default async function ChannelItemWrapper() {
  return channels.map((channel) => {
    return <ChannelItem key={channel.id} channel={channel} />
  })
}
