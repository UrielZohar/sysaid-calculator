import { useEffect } from 'react'
import { Menu } from 'antd'
import { AppstoreOutlined } from '@ant-design/icons'
import type { MenuProps } from 'antd'
import { Button } from 'antd'
import { useNavigate, Outlet } from 'react-router-dom'
import { useAppSelector, useAppDispatch } from  '../../app/hooks'
import { selectLoggedInUser, logout } from '../Login/LoginSlice'
import styles from './Header.module.css'

const Header = () => {
  const dispatch = useAppDispatch();

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

  const onLogout = () => {
    dispatch(logout());
    navigate('/login')
  }

  const loggedInUser = useAppSelector(selectLoggedInUser);

  useEffect(() => {
    if (!loggedInUser) {
      navigate('/login');
    }
  }, [loggedInUser])

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
        <div className={styles.loggedInUser}>
          <div className={styles.logoutButton}>
            <Button onClick={onLogout}>Logout</Button>
          </div>
          Hello {loggedInUser}
        </div>
      </div>
      <Outlet />
    </div>
  )
}

export { Header }