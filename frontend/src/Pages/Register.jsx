import React, { useState, useEffect } from 'react';
import "./CSS/Register.css";
import { Form, DatePicker, Input, Radio, Button, Checkbox } from 'antd';
import moment from "moment";

const Register = () => {

  const register  = async () => {
    console.log("Register Executed", formData);
    let responseData;
    await fetch("http://localhost:4000/register", {
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
    name: "",
    surname: "",
    phoneNumber: "",
    email: "",
    password: "",
    gender: "ไม่ระบุ",
    birthday: "",
    agreement: false,
    consent: false
  })

  const changeHandler = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    });
  }

  const [form] = Form.useForm();
  const [clientReady, setClientReady] = useState(false);

  useEffect(() => {
    setClientReady(true);
  }, []);

  const handleDateChange = (date, dateString) => {
    if (date && date.isValid()) {
      setFormData({ ...formData, birthday: dateString });
    } else {
      setFormData({ ...formData, birthday: '' });
    }
  }

  return (
    <div className="site-body ant-layout" style={{ padding: "112px 0px 40px" }}>
      <div className="ant-layout">
        <div className="ant-layout-content" style={{ padding: "0px", margin: "0px" }}>
          <div className="container">
            <div className="box-register">
              <div className="box-header">
                <div className="content-register">
                  <h2>สร้างบัญชี</h2>
                  <p>สมัครสมาชิกและเริ่มใช้งาน</p>
                </div>
              </div>
              <div className="box-body">
                <div className="register-form">
                  <Form
                    name="register"
                    form={form}
                    onFinish={register}
                    layout="vertical"
                    autoComplete="off"
                    style={{ maxWidth: 600 }}
                  >
                    <Form.Item
                      hasFeedback
                      label="ชื่อ"
                      name="name"
                      validateTrigger="onBlur"
                      rules={[
                        {
                          required: true,
                          min: 2,
                          message: "กรุณากรอกอย่างน้อย 2 ตัวอักษร",
                        },
                      ]}
                      style={{ display: 'inline-block', width: 'calc(50% - 8px)', margin: "0 8px 0 0" }}
                    >
                      <Input name="name" value={formData.name}onChange={changeHandler} placeholder="กรอกชื่อ" style={{ height: "48px" }}/>
                    </Form.Item>
                    <Form.Item
                      hasFeedback
                      label="นามสกุล"
                      name="surname"
                      autoComplete="off"
                      validateTrigger="onBlur"
                      rules={[
                        {
                          required: true,
                          min: 2,
                          message: "กรุณากรอกอย่างน้อย 2 ตัวอักษร",
                        },
                      ]}
                      style={{ display: 'inline-block', width: 'calc(50% - 8px)', margin: '0 0 0 8px' }}
                    >
                      <Input name="surname" value={formData.surname}onChange={changeHandler} placeholder="กรอกนามสกุล" style={{ height: "48px" }}/>
                    </Form.Item>
                    <Form.Item
                      hasFeedback
                      label="เบอร์โทรศัพท์"
                      name="phoneNumber"
                      autoComplete="off"
                      validateFirst
                      validateTrigger="onBlur"
                      rules={[
                        {
                          required: true,
                          len: 10,
                          message: "กรุณากรอกเบอร์โทรศัพท์",
                        }
                      ]}
                    >
                      <Input name="phoneNumber" value={formData.phoneNumber}onChange={changeHandler} placeholder="กรอกเบอร์โทรศัพท์" style={{ height: "48px" }} />
                    </Form.Item>
                    <Form.Item
                      name="email"
                      label="อีเมล"
                      validateTrigger="onBlur"
                      autoComplete="off"
                      extra="กรุณาตรวจสอบอีเมลที่ระบุให้ถูกต้อง"
                      rules={[
                        {
                          type: 'email',
                          message: 'อีเมลไม่ถูกต้อง',
                        },
                        {
                          required: true,
                          message: 'กรุณากรอกอีเมล',
                        },
                      ]}
                    >
                      <Input name="email" value={formData.email} onChange={changeHandler} placeholder="กรอกอีเมล" style={{ height: "48px" }} />
                    </Form.Item>
                    <Form.Item
                      label="รหัสผ่าน"
                      name="password"
                      autoComplete="off"
                      validateTrigger="onBlur"
                      rules={[
                        {
                          required: true,
                          min: 8,
                          message: "ตั้งรหัสผ่านอย่างน้อย 8 ตัว",
                        }
                      ]}
                    >
                      <Input.Password name="password" value={formData.password}onChange={changeHandler} placeholder="กรอกรหัสผ่าน" style={{ height: "48px" }} />
                    </Form.Item>
                    <Form.Item
                      label="เพศ (ไม่ระบุได้)"
                    >
                      <Radio.Group className="gender-radio-group"
                        options={["ชาย", "หญิง", "ไม่ระบุ"]}
                        optionType="button"
                        buttonStyle="solid"
                        name="gender" 
                        value={formData.gender}
                        onChange={changeHandler}
                      />
                    </Form.Item>
                    <Form.Item label="ของขวัญวันเกิดรอคุณอยู่">
                      <DatePicker name="birthday" value={formData.birthday ? moment(formData.birthday) : null} onChange={handleDateChange} style={{ width: "400px", height: "48px" }} />
                    </Form.Item>
                    <Form.Item
                      name="consent"
                      valuePropName="checked"
                      rules={[
                        {
                          validator: (_, value) =>
                            value ? Promise.resolve() : Promise.reject(new Error('Should accept agreement')),
                        },
                      ]}
                    >
                      <Checkbox name="consent" checked={formData.consent} onChange={changeHandler}>
                        ฉันได้อ่านและยอมรับ <a href="">ข้อกำหนดการใช้งาน</a> และ <a href="">นโยบายความเป็นส่วนตัว</a> ของสเวนเซ่นส์
                      </Checkbox>
                    </Form.Item>
                    <Form.Item
                      name="agreement"
                      valuePropName="checked"
                    >
                      <Checkbox name="agreement" checked={formData.agreement} onChange={changeHandler} style={{ display: "flex", alignItems: "center" }}>
                        ฉันยินยอมรับข้อมูลข่าวสาร กิจกรรมส่งเสริมการขายต่างๆ จากสเวนเซ่นส์และ <a href="">บริษัทในเครือ</a> โดยเราจะเก็บข้อมูลของท่านไว้เป็นความลับสามารถศึกษาเงื่อนไขหรือข้อตกลง <a href="">นโยบายความเป็นส่วนตัว</a>เพิ่มเติมได้ที่เว็บไซต์ของบริษัทฯ
                      </Checkbox>
                    </Form.Item>
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
                          สมัครสมาชิก
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

export default Register;