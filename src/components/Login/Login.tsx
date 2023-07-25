import { Button, Checkbox, Form, Input } from 'antd';
import { useNavigate } from 'react-router-dom'
import { useAppDispatch } from '../../app/hooks';
import { setLoggedInUser } from './LoginSlice'; 
import styles from './Login.module.css';


const Login: React.FC = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate()
  
  const onFinish = ({username}: any) => {
    dispatch(setLoggedInUser(username));
    navigate('/calculator');
  };
  
  const onFinishFailed = (errorInfo: any) => {
    alert('Error in login, please try again.');
  };


  return (<div className={styles.loginFormWrapper}>
    <Form
      name="basic"
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      style={{ maxWidth: 600 }}
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
      >
      <Form.Item
        label="Username"
        name="username"
        rules={[{ required: true, message: 'Please input your username!' }]}
        >
        <Input />
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        rules={[{ required: true, message: 'Please input your password!' }]}
        >
        <Input.Password />
      </Form.Item>

      <Form.Item name="remember" valuePropName="checked" wrapperCol={{ offset: 8, span: 16 }}>
        <Checkbox>Remember me</Checkbox>
      </Form.Item>

      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Button type="primary" htmlType="submit">
          Login
        </Button>
      </Form.Item>
    </Form>
  </div>)
};

export { Login };