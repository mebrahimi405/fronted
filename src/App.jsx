import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import logo from "./logo.svg";
import Login from "./containers/login";
import SignUp from "./containers/signUp";
import ForgetPass from "./containers/forgetPass";
import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signUp" element={<SignUp />} />
        <Route path="/forgetpass" element={<ForgetPass />} />
      </Routes>
    </Router>
  );
}

export default App;

// <div className="App">

{
  /* <div class="login body d-flex flex-column justify-content-center align-items-center w-100">
        <div class="w-30 border py-5 px-3 rounded-1 d-flex flex-column gap-4">
          <h1 class="fs-4">ورود</h1>
          <form class="form-login d-flex flex-column gap-2">
            <input class="input" type="text" placeholder="نام و نام خانوادگی" />

            <input class="input" type="text" placeholder="نام کاربری" />

            <input class="input" type="text" placeholder="رمز عبور" />

            <input class="input" type="text" placeholder="تکرار رمز عبور" />

            <input class="input" type="text" placeholder="شماره تلفن" />
          </form>

          <div class="captcha d-flex">
            <p>captcha</p>
            <input class="input" />
          </div>

          <button class="btn-login bg-info-subtle rounded-1 py-2">
            ثبت نام
          </button>
          <a class="link" href="#">
            حساب کاربری دارید؟ برای ورود اینجا کلیک کنید.
          </a>
        </div>
      </div> */
}
// </div>

// ////////////////////////////////////////////////////////////////// get
// import React, { useEffect, useState } from "react";

// function App() {
//   const [data, setData] = useState(null); // برای ذخیره داده‌های دریافت شده
//   const [error, setError] = useState(null); // برای مدیریت خطا

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await fetch(
//           "http://192.168.79.98:8000/api/register/",
//           {
//             method: "GET",
//           }
//         );

//         if (!response.ok) {
//           // اگر وضعیت HTTP موفقیت‌آمیز نبود
//           throw new Error(`HTTP error! status: ${response.status}`);
//         }

//         const result = await response.json(); // تبدیل پاسخ به JSON
//         setData(result); // ذخیره داده‌ها
//       } catch (err) {
//         setError(err.message); // مدیریت خطا
//       }
//     };

//     fetchData(); // فراخوانی متد
//   }, []); // تنها یکبار اجرا شود

//   return (
//     <div>
//       <h1>API Data</h1>
//       {error && <p>Error: {error}</p>}
//       {data ? (
//         <pre>{JSON.stringify(data, null, 2)}</pre> // نمایش داده‌ها به صورت فرمت‌شده
//       ) : (
//         <p>Loading...</p>
//       )}
//     </div>
//   );
// }

// export default App;

////////////////////////////////////////////////////////// post

// import React, { useState } from "react";

// function App() {
//   const [formData, setFormData] = useState({ name: "", email: "" });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prevData) => ({
//       ...prevData,
//       [name]: value,
//     }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       const response = await fetch("http://192.168.79.98:8000/api/register/", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(formData), // تبدیل داده‌ها به JSON
//       });

//       if (!response.ok) {
//         throw new Error("خطا در ارسال داده");
//       }

//       const data = await response.json(); // دریافت پاسخ به‌صورت JSON
//       console.log("پاسخ سرور:", data);
//     } catch (error) {
//       console.error("خطا:", error);
//     }
//   };

//   return (
//     <div>
//       <h1>ارسال داده به API Django</h1>
//       <form onSubmit={handleSubmit}>
//         <div>
//           <label>نام:</label>
//           <input
//             type="text"
//             name="name"
//             value={formData.name}
//             onChange={handleChange}
//           />
//         </div>
//         <div>
//           <label>ایمیل:</label>
//           <input
//             type="email"
//             name="email"
//             value={formData.email}
//             onChange={handleChange}
//           />
//         </div>
//         <button type="submit">ارسال</button>
//       </form>
//     </div>
//   );
// }

// export default App;

////////////////////////////////////////////////////////////////////////////////////////////////////

// import React, { useState } from "react";

// function App() {
//   // State برای ذخیره داده‌های فرم
//   const [formData, setFormData] = useState({
//     fullName: "",
//     username: "",
//     password: "",
//     confirmPassword: "",
//     phone: "",
//   });

//   const [responseMessage, setResponseMessage] = useState(null); // برای پیام‌های موفقیت یا خطا

//   // مدیریت تغییرات ورودی‌های فرم
//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prevData) => ({
//       ...prevData,
//       [name]: value,
//     }));
//   };

//   // تابع ارسال داده‌ها به بک‌اند
//   const handleSubmit = async (e) => {
//     e.preventDefault(); // جلوگیری از بارگذاری مجدد صفحه
//     try {
//       const response = await fetch("http://192.168.79.98:8000/api/register/", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(formData),
//       });

//       if (!response.ok) {
//         throw new Error(`HTTP error! status: ${response.status}`);
//       }

//       const data = await response.json();
//       setResponseMessage(data.message || "ثبت‌نام موفقیت‌آمیز بود");
//     } catch (error) {
//       setResponseMessage(error.message || "خطایی رخ داده است");
//     }
//   };

//   return (
//     <div className="App">
//       <div className="login body d-flex flex-column justify-content-center align-items-center w-100 bg-[$blue]">
//         <div className="w-30 border py-5 px-3 rounded-1 d-flex flex-column gap-4">
//           <h1 className="fs-4">ورود</h1>
//           <form
//             className="form-login d-flex flex-column gap-2"
//             onSubmit={handleSubmit}
//           >
//             <input
//               className="input"
//               type="text"
//               name="fullName"
//               placeholder="نام و نام خانوادگی"
//               value={formData.fullName}
//               onChange={handleChange}
//             />
//             <input
//               className="input"
//               type="text"
//               name="username"
//               placeholder="نام کاربری"
//               value={formData.username}
//               onChange={handleChange}
//             />
//             <input
//               className="input"
//               type="password"
//               name="password"
//               placeholder="رمز عبور"
//               value={formData.password}
//               onChange={handleChange}
//             />
//             <input
//               className="input"
//               type="password"
//               name="confirmPassword"
//               placeholder="تکرار رمز عبور"
//               value={formData.confirmPassword}
//               onChange={handleChange}
//             />
//             <input
//               className="input"
//               type="text"
//               name="phone"
//               placeholder="شماره تلفن"
//               value={formData.phone}
//               onChange={handleChange}
//             />
//             <button
//               type="submit"
//               className="btn-login bg-info-subtle rounded-1 py-2"
//             >
//               ثبت نام
//             </button>
//           </form>
//           {responseMessage && (
//             <p
//               style={{
//                 color: responseMessage.includes("خطا") ? "red" : "green",
//               }}
//             >
//               {responseMessage}
//             </p>
//           )}
//           <a className="link" href="#">
//             حساب کاربری دارید؟ برای ورود اینجا کلیک کنید.
//           </a>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default App;
