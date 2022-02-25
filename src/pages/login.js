import React from 'react';
import { Form, Input, Button, Checkbox } from 'antd';
import { login } from '../middleware/auth';
import loginPictureFull from '../assets/pictures/loginPictureFull.png'
// import loginPictureResized from '../assets/pictures/loginPictureResized.png'
import { UserOutlined } from '@ant-design/icons';

import CustomLayout from '../component/layout'

const Login = props => {

    // LOGIN SUCCESS
    const onFinish = values => {
        console.log('Success:', values);
        login(props, values);
    };

    // LOGIN FAILED
    const onFinishFailed = errorInfo => {
        console.log('Failed:', errorInfo);
    };

    return (
        <CustomLayout className="app-login" isHeader={true}>
					
					<div className="login-page">
            <div className="login-box">
              <div className="illustration-wrapper">
                <img src={loginPictureFull} alt="Login"/>
              </div>
              <Form
                name="login-form"
                initialValues={{ remember: true }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
              >
                <p className="form-title" style={{ marginBottom: '60px'}}>ลงชื่อเข้าใช้งานระบบ</p>
                <Form.Item
                  name="username"
                  rules={[{ required: true, message: 'กรุณากรอกข้อมูล!' }]}
                >
                  <Input
                    placeholder="รหัสพนักงาน"
                    autoComplete='off'
                    prefix={<UserOutlined />}
                  />
                </Form.Item>

                <Form.Item
                  name="password"
                  rules={[{ required: true, message: 'กรุณากรอกข้อมูล!' }]}
                >
                  <Input.Password 
                    placeholder="รหัสผ่าน"
                    prefix={<UserOutlined />}
                  />
                </Form.Item>

                <Form.Item name="remember" valuePropName="checked">
                  <Checkbox  style={{float: 'right'}}>Remember me</Checkbox>
                </Form.Item>

                <Form.Item>
                  <Button type="primary" htmlType="submit" className="login-form-button">
                    เข้าสู่ระบบ
                  </Button>
                </Form.Item>
              </Form>
              
            </div>
          </div>

        </CustomLayout>
    );
};

export default Login;