import React, { useState } from "react";
import logo from "../assets/images/logo.png";

function Login() {
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  // تابع برای ارسال داده‌ها به سرور
  const handleSubmit = async (event) => {
    event.preventDefault(event); // جلوگیری از ریفرش شدن صفحه

    const userData = {
      email: email,
      phone: phone,
    };

    try {
      const response = await fetch("http://your-backend-url.com/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      });

      if (response.ok) {
        const data = await response.json();
        console.log("Data received from server:", data);
      } else {
        console.error("Error in sending data");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div class="login w-100 vh-100 d-flex justify-content-center align-items-center bg-white">
      <div className="login-container w-75 h-75 bg-light rounded-4 d-flex overflow-hidden">
        <div class="login-content d-flex flex-column justify-content-center align-items-stretch px-5 gap-3">
          <img
            class="align-self-center"
            src={logo}
            alt="logo"
            width={"50%"}
            height={"auto"}
          />

          <h1 className="fs-5 text-center">به کامسی خوش آمدید.</h1>

          <form className="d-flex flex-column gap-1">
            <label htmlFor="name">شماره تلفن:</label>
            <input
              class="p-2 border-0"
              type="text"
              id="name"
              placeholder="شماره تلفن"
            />

            <label htmlFor="password">رمز عبور:</label>
            <input
              class="p-2 border-0"
              type="password"
              id="password"
              placeholder="رمز عبور خود را وارد نمایید"
            />
          </form>

          <a href="#">رمز عبور خود را فراموش کرده اید؟</a>

          <button className="py-2 border-0 bg-green" onClick={handleSubmit}>
            ورود
          </button>

          <a href="#">حساب کاربری ندارید؟ ساخت حساب کاربری</a>
        </div>
        <div class="login-pic"></div>
      </div>
    </div>
  );
}

export default Login;
