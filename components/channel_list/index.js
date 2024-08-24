import Css from './index.module.css'
import ChannelItemWrapper from '../channel_item/wrapper'

export default function ChannelList() {
  return (
    <div className={`${Css.main}`}>
      <div>Channel List</div>
      <div className={`${Css.wrapper}`}>
        <ChannelItemWrapper />
      </div>
    </div>
  )
}
