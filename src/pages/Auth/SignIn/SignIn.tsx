
// import { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";

// function SignIn() {
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState("");
//   const navigate = useNavigate();

//   const handleLogin = async () => {
//     try {
//       const response = await fetch(
//         `http://localhost:5000/users?username=${username}`
//       );
//       const data = await response.json();

//       if (data.length === 0) {
//         setError("User not found!");
//         return;
//       }

//       const user = data[0];

//       if (user.password === password) {
//         setError("");
//         localStorage.setItem("user", JSON.stringify(user));
//         navigate("/dashboard");
//       } else {
//         setError("Invalid password!");
//       }
//     } catch (err) {
//       console.error(err);
//       setError("Something went wrong!");
//     }
//   };

//   return (
//     <div
//       className="min-h-screen flex items-center justify-center px-6"
//       style={{
//         backgroundImage: "url('/assets/authbg.png')",
//         backgroundSize: "cover",
//         backgroundPosition: "center",
//         backgroundColor: "#ff6767",
//       }}
//     >
//       <div className="flex flex-col md:flex-row bg-white rounded-2xl shadow-xl w-full max-w-5xl overflow-hidden">
//         {/* Left Side - Form */}
//         <div className="w-full md:w-1/2 p-10 flex flex-col justify-center">
//           <h2 className="text-3xl font-bold text-gray-800 mb-6">Sign In</h2>

//           {/* Username */}
//           <div className="relative mb-5">
//             <img
//               src="/assets/username.png"
//               alt="username icon"
//               className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5"
//             />
//             <input
//               type="text"
//               placeholder="Enter Username"
//               value={username}
//               onChange={(e) => setUsername(e.target.value)}
//               className="w-full pl-10 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-[#ff6767] outline-none"
//             />
//           </div>

//           {/* Password */}
//           <div className="relative mb-5">
//             <img
//               src="/assets/Password.png"
//               alt="password icon"
//               className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5"
//             />
//             <input
//               type="password"
//               placeholder="Enter Password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               className="w-full pl-10 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-[#ff6767] outline-none"
//             />
//           </div>

//           {/* Error */}
//           {error && <p className="text-red-500 text-sm mb-3">{error}</p>}

//           {/* Already have account */}
//           <p className="text-left text-sm text-gray-600 mb-4">
//             Don’t have an account?{" "}
//             <Link
//               to="/signup"
//               className="text-[#008BD9] font-semibold hover:underline"
//             >
//               Create one
//             </Link>
//           </p>

//           {/* Button */}
//           <button
//             onClick={handleLogin}
//             className="w-full py-3 rounded-lg text-white font-semibold bg-[#ff6767] hover:bg-[#e05555] transition"
//           >
//             Login
//           </button>
//         </div>

//         {/* Right Side - Illustration */}
//         <div className="hidden md:flex w-1/2 items-center justify-center">
//           <img
//             src="/assets/SignIn.png"
//             alt="Sign In Illustration"
//             className="w-3/4 h-auto"
//           />
//         </div>
//       </div>
//     </div>
//   );
// }

// export default SignIn;






import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function SignIn() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async () => {
    setError("");
    setLoading(true);

    try {
      const response = await fetch(
        `http://localhost:5000/users?username=${username}`
      );
      const data = await response.json();

      if (data.length === 0) {
        setError("User not found!");
        return;
      }

      const user = data[0];

      if (user.password === password) {
        localStorage.setItem("user", JSON.stringify(user));
        navigate("/dashboard");
      } else {
        setError("Invalid password!");
      }
    } catch (err) {
      console.error(err);
      setError("Something went wrong!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center px-6"
      style={{
        backgroundImage: "url('/assets/authbg.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundColor: "#ff6767",
      }}
    >
      <div className="flex flex-col md:flex-row bg-white rounded-2xl shadow-xl w-full max-w-5xl overflow-hidden">
        {/* Left Side - Form */}
        <div className="w-full md:w-1/2 p-10 flex flex-col justify-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Sign In</h2>

          {/* Username */}
          <div className="relative mb-5">
            <img
              src="/assets/username.png"
              alt="username icon"
              className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5"
            />
            <input
              type="text"
              placeholder="Enter Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:border-[#ff6767] focus:ring-1 focus:ring-[#ff6767] outline-none transition"
            />
          </div>

          {/* Password */}
          <div className="relative mb-5">
            <img
              src="/assets/Password.png"
              alt="password icon"
              className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5"
            />
            <input
              type="password"
              placeholder="Enter Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:border-[#ff6767] focus:ring-1 focus:ring-[#ff6767] outline-none transition"
            />
          </div>

          {/* Error */}
          {error && <p className="text-red-500 text-sm mb-3">{error}</p>}

          {/* Create account text */}
          <p className="text-left text-sm text-gray-600 mb-4">
            Don’t have an account?{" "}
            <Link
              to="/signup"
              className="text-[#008BD9] font-semibold hover:underline"
            >
              Create one
            </Link>
          </p>

          {/* Button */}
          <button
            onClick={handleLogin}
            disabled={loading}
            className={`w-full py-3 rounded-lg text-white font-semibold transition ${
              loading
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-[#ff6767] hover:bg-[#e05555]"
            }`}
          >
            {loading ? "Logging in..." : "Login"}
          </button>
        </div>

        {/* Right Side - Illustration */}
        <div className="hidden md:flex w-1/2 items-center justify-center">
          <img
            src="/assets/SignIn.png"
            alt="Sign In Illustration"
            className="w-3/4 h-auto"
          />
        </div>
      </div>
    </div>
  );
}

export default SignIn;
