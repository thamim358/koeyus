import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from 'axios';
import { Form, Input, Button } from "antd";
import Navbar from "../component/Navbar/Navbar"; // Import your Navbar component
import { response } from "express";

function Login() {
  const [isLogin, setIsLogin] = useState(true);


  const onFinishLogin = async (values) => {
    try {
      const response = await axios.post('http://localhost:5000/api/login', {
        email: values.email,
        password: values.password,
        
      });
  
      console.log('Login successful:', response.data);
      // Handle successful login - e.g., set user state, redirect, etc.
    } catch (error) {
      console.error('Login failed:', error.response.data);
      // Handle login failure - e.g., show error message to the user
    }
  };
  const onFinishSignup = async (values) => {
    try {
      const response = await axios.post('http://localhost:5000/api/signup', {
        email: values.email,
        password: values.password,
      });

      console.log('Signup successful:', response.data);
      // Handle successful signup - e.g., show success message, redirect to login, etc.
    } catch (error) {
      console.error('Signup failedsss:', error.response.data);
      // Handle signup failure - e.g., show error message to the user
    }
  };
  return (
    <>
      <Navbar />
      <section id="home">
        <section className="bg-center bg-no-repeat flex justify-center items-center h-screen bg-blend-darken">
          <div className="px-4 mx-auto  w-full flex justify-center items-center text-center py-24 lg:py-44">
            <div className="bg-white shadow-lg rounded-xl  p-10 max-w-md w-full ring-1 ring-black">
              {isLogin ? (
                <>
                  <h1 className="text-2xl font-bold mb-4 self-start">
                    Welcome
                  </h1>
                  <Form
                    name="login"
                    onFinish={onFinishLogin}
                    initialValues={{
                      remember: true,
                    }}
                  >
                    <Form.Item
                      name="email"
                      rules={[
                        {
                          required: true,
                          message: "Please input your email!",
                        },
                      ]}
                    >
                      <Input placeholder="Email" className="rounded-full h-8 ring-1 ring-black" />
                    </Form.Item>

                    <Form.Item
                      name="password"
                      rules={[
                        {
                          required: true,
                          message: "Please input your password!",
                        },
                      ]}
                    >
                      <Input.Password
                        placeholder="Password"
                        className=" rounded-full ring-1 ring-black"
                      />
                       <Link
                      to="/forgot-password"
                      className="text-blue-500 flex justify-end"
                    >
                      Forgot Password?
                    </Link>
                    </Form.Item>
                   
                    <Form.Item>
                      <Button
                        type="primary"
                        htmlType="submit"
                        className="w-full text-black bg-white ring-1 ring-black mt-2"
                      >
                        Log In
                      </Button>
                    </Form.Item>
                  </Form>
                  <div className="text-center">
                    <span>Don't have an account? </span>
                    <Link
                      to="#"
                      onClick={() => setIsLogin(false)}
                      className="text-blue-500"
                    >
                      Sign Up
                    </Link>
                   
                  </div>
                </>
              ) : (
                <>
                <h1 className="text-2xl font-bold mb-4 self-start">
                  Create Account
                </h1>
                <Form
                  name="signup"
                  onFinish={onFinishSignup}
                  initialValues={{
                    remember: true,
                  }}
                >
                  <Form.Item
                    name="email"
                    rules={[
                      {
                        required: true,
                        message: "Please input your email!",
                      },
                    ]}
                  >
                    <Input placeholder="Email" className="rounded-full h-8 ring-1 ring-black" />
                  </Form.Item>

                  <Form.Item
                    name="password"
                    rules={[
                      {
                        required: true,
                        message: "Please input your password!",
                      },
                    ]}
                  >
                    <Input.Password
                      placeholder="Password"
                      className="rounded-full ring-1 ring-black"
                    />
                  </Form.Item>
                  <Form.Item>
                    <Button
                      type="primary"
                      htmlType="submit"
                      className="w-full text-black bg-white ring-1 ring-black mt-2"
                    >
                      Sign Up
                    </Button>
                  </Form.Item>
                </Form>
                <div className="text-center">
                  <span>Already have an account? </span>
                  <Link
                    to="#"
                    onClick={() => setIsLogin(true)}
                    className="text-blue-500"
                  >
                    Log In
                  </Link>
                  {/* {response.data && (
                  <div className="mt-3 text-bold text-lg text-green-500">
                    {response.data}
                  </div>
                )} */}
                </div>
              </>
              )}
            </div>
          </div>
        </section>
      </section>
    </>
  );
}

export default Login;
