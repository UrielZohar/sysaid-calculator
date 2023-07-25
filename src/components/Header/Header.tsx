import { Menu } from 'antd'
import { AppstoreOutlined } from '@ant-design/icons'
import type { MenuProps } from 'antd'
import { useNavigate, Outlet } from 'react-router-dom'
import styles from './Header.module.css'

const Header = () => {

  const items: MenuProps['items'] = [
    {
      label: 'Calculator',
      key: '/calculator',
      icon: <AppstoreOutlined />,
    },
    {
      label: 'History',
      key: '/history',
      icon: <AppstoreOutlined />,
    },
  ]

  const navigate = useNavigate()

  const onClick = ({key}: any) => {
    navigate(key)
  }

  return (
    <div className={styles.headerWrapper}>
      <div className={styles.header}>
        <div className={styles.menu}>
          <Menu
            onClick={onClick} 
            mode="horizontal" 
            items={items} 
            />
        </div>
      </div>
      <Outlet />
    </div>
  )
}

export { Header }