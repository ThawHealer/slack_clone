import ChannelList from '@/components/channel_list'
import Logout from '@/components/logout'
import Css from './page.module.css'

export default function Layout({ children }) {
  return (
    <div className={`${Css.main}`}>
      <div className={`${Css.left_panel}`}>
        <ChannelList />
        <Logout />
      </div>
      <div className={`${Css.right_panel}`}>{children}</div>
    </div>
  )
}
