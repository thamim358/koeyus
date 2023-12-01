import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Form, Input, Button } from "antd";
import Navbar from "../component/Navbar/Navbar"; // Import your Navbar component

function Login() {
  const [isLogin, setIsLogin] = useState(true);

  const onFinishLogin = (values) => {
    console.log("Received login values:", values);
    // Handle login logic here
  };
  const onFinishSignup = (values) => {
    console.log("Received login values:", values);
    // Handle login logic here
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

                  <Form.Item
                    name="confirmPassword"
                    dependencies={["password"]}
                    rules={[
                      {
                        required: true,
                        message: "Please confirm your password!",
                      },
                      ({ getFieldValue }) => ({
                        validator(_, value) {
                          if (!value || getFieldValue("password") === value) {
                            return Promise.resolve();
                          }
                          return Promise.reject(
                            new Error(
                              "The two passwords that you entered do not match!"
                            )
                          );
                        },
                      }),
                    ]}
                  >
                    <Input.Password
                      placeholder="Confirm Password"
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
