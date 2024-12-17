import React, { useState } from "react";
import axios from "axios";
import logo from "../assets/images/logo.png";

function SignUp() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phoneNumber: "",
    smsCode: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  // مدیریت تغییرات در فرم
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // ارسال کد تایید
  const handleSendCode = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      setError("");
      setSuccess("");
      // درخواست به بک‌اند برای ارسال کد تایید
      await axios.post(process.env.REACT_APP_API_URL + "/api/send-code", {
        phoneNumber: formData.phoneNumber,
      });
      setSuccess("کد تایید ارسال شد.");
    } catch (err) {
      setError("ارسال کد تایید با مشکل مواجه شد.");
    } finally {
      setLoading(false);
    }
  };

  // ارسال اطلاعات فرم ثبت‌نام
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      setError("");
      setSuccess("");
      // درخواست به بک‌اند برای ثبت‌نام
      const response = await axios.post(
        process.env.REACT_APP_API_URL + "/api/signup",
        formData
      );
      setSuccess("ثبت نام با موفقیت انجام شد!");
      console.log(response.data);
    } catch (err) {
      setError("ثبت نام ناموفق بود. لطفاً دوباره تلاش کنید.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login w-100 vh-100 d-flex justify-content-center align-items-center bg-white">
      <div className="container-gradiant signup-container w-75 bg-light rounded-4 d-flex overflow-hidden">
        <div className="login-content d-flex flex-column justify-content-center align-items-stretch px-5 gap-3">
          <div className="top d-flex justify-content-between align-items-center">
            <p className="fs-4">ثبت نام</p>
            <img
              className="align-self-center"
              src={logo}
              alt="logo"
              width={"30%"}
              height={"auto"}
            />
          </div>

          {/* فرم ثبت‌نام */}
          <form className="d-flex flex-column gap-1" onSubmit={handleSubmit}>
            <label htmlFor="firstName">نام:</label>
            <input
              className="p-3 border-0 rounded-2"
              type="text"
              id="firstName"
              name="firstName"
              placeholder="نام"
              value={formData.firstName}
              onChange={handleChange}
            />

            <label htmlFor="lastName">نام خانوادگی:</label>
            <input
              className="p-3 border-0 rounded-2"
              type="text"
              id="lastName"
              name="lastName"
              placeholder="نام خانوادگی"
              value={formData.lastName}
              onChange={handleChange}
            />

            <label htmlFor="phoneNumber">شماره تماس:</label>
            <input
              className="p-3 border-0 rounded-2"
              type="tel"
              id="phoneNumber"
              name="phoneNumber"
              placeholder="09*********"
              value={formData.phoneNumber}
              onChange={handleChange}
            />

            <label htmlFor="smsCode">پیامک تایید:</label>
            <div className="input-code d-flex gap-2">
              <input
                className="p-3 border-0 rounded-2 flex-grow-1"
                type="text"
                id="smsCode"
                name="smsCode"
                placeholder="کد تایید را وارد کنید"
                value={formData.smsCode}
                onChange={handleChange}
              />
              <button
                className="send-code p-3 bg-green rounded-2 text-white border-0"
                onClick={handleSendCode}
                disabled={loading}
              >
                {loading ? "در حال ارسال..." : "ارسال کد"}
              </button>
            </div>

            <label htmlFor="password">رمز عبور:</label>
            <input
              className="p-3 border-0 rounded-2"
              type="password"
              id="password"
              name="password"
              placeholder="رمز عبور"
              value={formData.password}
              onChange={handleChange}
            />

            <button
              type="submit"
              className="signup-button py-3 border-0 rounded-2 bg-green mt-4 text-white"
              disabled={loading}
            >
              {loading ? "در حال ثبت‌نام..." : "ثبت نام"}
            </button>
          </form>

          {/* نمایش پیام‌ها */}
          {error && <p className="text-danger text-center">{error}</p>}
          {success && <p className="text-success text-center">{success}</p>}

          <a href="#" className="text-decoration-none text-center">
            حساب کاربری دارید؟ برای ورود اینجا کلیک کنید
          </a>
        </div>
        <div className="login-pic"></div>
      </div>
    </div>
  );
}

export default SignUp;
