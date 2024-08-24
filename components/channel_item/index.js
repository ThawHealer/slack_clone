import Link from 'next/link'

export default function ChannelItem({ channel }) {
  return (
    <div>
      <Link href={`/main_panel/channels/${channel.id}`}>
        <div># {channel.name}</div>
      </Link>
    </div>
  )
}
