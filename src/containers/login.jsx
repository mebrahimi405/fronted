import React, { useState } from "react";
import logo from "../assets/images/logo.png";
import { Link } from "react-router-dom";
import axios from "axios";

function Login() {
  const [formData, setFormData] = useState({
    phone: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  // مدیریت تغییرات فرم
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // ارسال فرم
  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    setError("");
    setSuccess("");

    try {
      const response = await fetch(
        process.env.REACT_APP_API_URL + "/api/login",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        }
      );

      if (!response.ok) throw new Error("خطا در ارسال اطلاعات!");

      const data = await response.json();
      setSuccess("ورود با موفقیت انجام شد!");
      console.log("Server Response:", data);
    } catch (error) {
      setError(error.message || "مشکلی پیش آمده است!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login w-100 vh-100 d-flex justify-content-center align-items-center bg-white">
      <div className="container-gradiant login-container w-75 h-75 bg-light rounded-4 d-flex overflow-hidden">
        <div className="login-content d-flex flex-column justify-content-center align-items-stretch px-5 gap-3">
          <img
            className="align-self-center"
            src={logo}
            alt="logo"
            width={"50%"}
            height={"auto"}
          />

          <h1 className="fs-5 text-center">به کامسی خوش آمدید.</h1>

          <form className="d-flex flex-column gap-1" onSubmit={handleSubmit}>
            <label htmlFor="phone-number">شماره تلفن:</label>
            <input
              className="p-2 border-0"
              type="tel"
              id="phone-number"
              name="phone"
              placeholder="09*********"
              value={formData.phone}
              onChange={handleChange}
            />

            <label htmlFor="password">رمز عبور:</label>
            <input
              className="p-2 border-0"
              type="password"
              id="password"
              name="password"
              placeholder="رمز عبور خود را وارد نمایید"
              value={formData.password}
              onChange={handleChange}
            />

            <button
              type="submit"
              className="mt-3 login-button py-3 border-0 rounded-2 bg-green"
              disabled={loading}
            >
              {loading ? "در حال ارسال..." : "ورود"}
            </button>
          </form>

          {error && <p className="text-danger text-center">{error}</p>}
          {success && <p className="text-success text-center">{success}</p>}

          {/* <a href="#" className="text-decoration-none">
           رمز عبور خود را فراموش کرده‌اید؟
          </a> */}

          <Link to="/forgetPass">رمز عبور خود را فراموش کرده‌اید؟</Link>
          <Link to="/signUp">
            حساب کاربری ندارید؟ برای ساخت حساب کاربری اینجا کلیک کنید.
          </Link>
        </div>
        <div className="login-pic"></div>
      </div>
    </div>
  );
}

export default Login;
