// import React, { useState, useEffect } from "react";
// import axios from "axios";

// function App() {
//   const [data, setData] = useState(null);

//   useEffect(() => {
//     axios
//       .get("http://http://192.168.79.48:3000//api/data/") // آدرس API
//       .then((response) => setData(response.data))
//       .catch((error) => console.error("خطا در گرفتن داده:", error));
//   }, []);

//   return (
//     <div>
//       <h1>دریافت داده از سرور Django</h1>
//       {data ? <p>{data.message}</p> : <p>در حال بارگذاری...</p>}
//     </div>
//   );
// }

// export default App;
