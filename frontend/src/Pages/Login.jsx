import React, { useEffect, useState } from 'react';
import "./CSS/Login.css"
import { Button, Form, Input } from 'antd';

const Login = () => {

  const login  = async () => {
    console.log("Login Executed", formData);
    let responseData;
    await fetch("http://localhost:4000/login", {
      method: "POST",
      headers: {
        Accept: "application/form-data",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    }).then((response)=> response.json()).then((data)=>responseData=data)

    if (responseData.success){
      localStorage.setItem("auth-token", responseData.token);
      window.location.replace("/")
    }
    else {
      alert(responseData.error)
    }
  }

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  })

  const changeHandler = (e) => {
    setFormData({...formData, [e.target.name]:e.target.value})
  }

  const [form] = Form.useForm();
  const [clientReady, setClientReady] = useState(false);

  useEffect(() => {
    setClientReady(true);
  }, []);

  return (
    <div className="site-body ant-layout" style={{ padding: "112px 0px 40px" }}>
      <div className="ant-layout">
        <div className="ant-layout-content" style={{ padding: "0px", margin: "0px" }}>
          <div className="container">
            <div className="box-login">
              <div className="box-header">
                <div className="content-login">
                  <h2>ยินดีต้อนรับ</h2>
                  <p>เข้าสู่ระบบเพื่อใช้งาน</p>
                </div>
              </div>
              <div className="box-body">
                <div id="login" className="login-form">
                  <Form 
                    name="login" 
                    form={form} 
                    onFinish={login}
                    layout="vertical"
                    style={{ maxWidth: 600 }}
                  >
                    <Form.Item
                      name="email"
                      label="อีเมล"
                      rules={[
                        {
                          required: true
                        },
                      ]}
                    >
                      <Input name="email" value={formData.email} onChange={changeHandler} placeholder="กรอกอีเมล" />
                    </Form.Item>
                    <Form.Item
                      name="password"
                      label="รหัสผ่าน"
                      rules={[
                        {
                          min: 8,
                          required: true,
                          message: "ตั้งรหัสผ่านอย่างน้อย 8 ตัว",
                        },
                      ]}
                    >
                      <Input.Password name="password" value={formData.password} onChange={changeHandler} placeholder="กรอกรหัสผ่าน"
                      />
                    </Form.Item>
                    <div className="forgot-password">
                      <a href="">ลืมรหัสผ่าน</a>
                    </div>
                    <Form.Item shouldUpdate>
                      {() => (
                        <Button
                          type="primary"
                          htmlType="submit"
                          disabled={
                            !clientReady ||
                            !form.isFieldsTouched(true) ||
                            !!form.getFieldsError().filter(({ errors }) => errors.length).length
                          }
                        >
                          เข้าสู่ระบบ
                        </Button>
                      )}
                    </Form.Item>
                  </Form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login