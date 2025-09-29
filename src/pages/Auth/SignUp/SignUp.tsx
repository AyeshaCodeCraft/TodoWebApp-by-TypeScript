

// import { useState } from "react";
// import { useNavigate, Link } from "react-router-dom";

// function SignUp() {
//   const navigate = useNavigate();

//   const [formData, setFormData] = useState({
//     firstName: "",
//     lastName: "",
//     username: "",
//     email: "",
//     password: "",
//     confirmPassword: "",
//     agree: false,
//   });

//   const [errors, setErrors] = useState<Record<string, string>>({});

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const { name, value, type, checked } = e.target;
//     setFormData((prev) => ({
//       ...prev,
//       [name]: type === "checkbox" ? checked : value,
//     }));
//   };

//   const validate = () => {
//     const newErrors: Record<string, string> = {};
//     if (!formData.firstName) newErrors.firstName = "First name is required";
//     if (!formData.lastName) newErrors.lastName = "Last name is required";
//     if (!formData.username) newErrors.username = "Username is required";
//     if (!formData.email) newErrors.email = "Email is required";
//     if (!formData.password) newErrors.password = "Password is required";
//     if (formData.password !== formData.confirmPassword)
//       newErrors.confirmPassword = "Passwords do not match";
//     if (!formData.agree) newErrors.agree = "You must accept the terms";
//     return newErrors;
//   };

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     const validationErrors = validate();
//     if (Object.keys(validationErrors).length > 0) {
//       setErrors(validationErrors);
//       return;
//     }

//     const newUser = { id: Date.now(), ...formData };
//     localStorage.setItem("user", JSON.stringify(newUser));
//     navigate("/dashboard");
//   };

//   return (
//     <div
//       className="min-h-screen flex items-center justify-center px-6"
//       style={{
//         backgroundImage: "url('/assets/authbg.png')",
//         backgroundSize: "cover",
//         backgroundPosition: "center",
//         backgroundColor: "#ff6767", // fallback color
//       }}
//     >
//       <div className="flex flex-col md:flex-row bg-white rounded-2xl shadow-xl w-full max-w-5xl overflow-hidden">
//         {/* Left side image */}
//         <div className="hidden md:flex w-1/2  items-center justify-center">
//           <img
//             src="/assets/SignUp.png"
//             alt="Sign Up Illustration"
//             className="w-3/4 h-auto"
//           />
//         </div>

//         {/* Right side form */}
//         <div className="w-full md:w-1/2 p-10">
//           <h2 className="text-3xl font-bold text-gray-800 mb-6">Sign Up</h2>

//           <form onSubmit={handleSubmit} className="space-y-5">
//             {/* Input with icon */}
//             {[
//               { name: "firstName", placeholder: "Enter First Name", icon: "/assets/firstName.png" },
//               { name: "lastName", placeholder: "Enter Last Name", icon: "/assets/lastName.png" },
//               { name: "username", placeholder: "Enter Username", icon: "/assets/username.png" },
//               { name: "email", placeholder: "Enter Email", type: "email", icon: "/assets/email.png" },
//               { name: "password", placeholder: "Enter Password", type: "password", icon: "/assets/Password.png" },
//               { name: "confirmPassword", placeholder: "Confirm Password", type: "password", icon: "/assets/confirmPass.png" },
//             ].map((field) => (
//               <div key={field.name}>
//                 <div className="relative">
//                   <img
//                     src={field.icon}
//                     alt="icon"
//                     className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5"
//                   />
//                   <input
//                     type={field.type || "text"}
//                     name={field.name}
//                     placeholder={field.placeholder}
//                     value={formData[field.name as keyof typeof formData] as string}
//                     onChange={handleChange}
//                     className="w-full pl-10 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-[#ff6767] outline-none"
//                   />
//                 </div>
//                 {errors[field.name] && (
//                   <p className="text-red-500 text-sm mt-1">{errors[field.name]}</p>
//                 )}
//               </div>
//             ))}

//             {/* Checkbox */}
//             <div className="flex items-center">
//               <input
//                 type="checkbox"
//                 name="agree"
//                 checked={formData.agree}
//                 onChange={handleChange}
//                 className="mr-2"
//               />
//               <label className="text-sm text-gray-600">
//                 I agree to the terms & conditions
//               </label>
//             </div>
//             {errors.agree && <p className="text-red-500 text-sm">{errors.agree}</p>}

//             {/* Button */}
//             <button
//               type="submit"
//               disabled={!formData.agree}
//               className={`w-full py-3 rounded-lg text-white font-semibold transition ${
//                 formData.agree
//                   ? "bg-[#ff6767] hover:bg-[#e05555]"
//                   : "bg-gray-400 cursor-not-allowed"
//               }`}
//             >
//               Register
//             </button>

//             {/* Sign in text (left aligned) */}
//             <p className="text-left text-sm text-gray-600">
//               Already have an account?{" "}
//               <Link to="/signin" className="text-[blue] font-semibold hover:underline">
//                 Sign In
//               </Link>
//             </p>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default SignUp;



// import { useState } from "react";
// import { useNavigate, Link } from "react-router-dom";

// function SignUp() {
//   const navigate = useNavigate();

//   const [formData, setFormData] = useState({
//     firstName: "",
//     lastName: "",
//     username: "",
//     email: "",
//     password: "",
//     confirmPassword: "",
//     agree: false,
//   });

//   const [errors, setErrors] = useState<Record<string, string>>({});

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const { name, value, type, checked } = e.target;
//     setFormData((prev) => ({
//       ...prev,
//       [name]: type === "checkbox" ? checked : value,
//     }));
//   };

//   const validate = () => {
//     const newErrors: Record<string, string> = {};
//     if (!formData.firstName) newErrors.firstName = "First name is required";
//     if (!formData.lastName) newErrors.lastName = "Last name is required";
//     if (!formData.username) newErrors.username = "Username is required";
//     if (!formData.email) newErrors.email = "Email is required";
//     if (!formData.password) newErrors.password = "Password is required";
//     if (formData.password !== formData.confirmPassword)
//       newErrors.confirmPassword = "Passwords do not match";
//     if (!formData.agree) newErrors.agree = "You must accept the terms";
//     return newErrors;
//   };

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     const validationErrors = validate();
//     if (Object.keys(validationErrors).length > 0) {
//       setErrors(validationErrors);
//       return;
//     }

//     const newUser = { id: Date.now(), ...formData };
//     localStorage.setItem("user", JSON.stringify(newUser));
//     navigate("/dashboard");
//   };

//   return (
//     <div
//       className="min-h-screen flex items-center justify-center px-6"
//       style={{
//         backgroundImage: "url('/assets/authbg.png')",
//         backgroundSize: "cover",
//         backgroundPosition: "center",
//         backgroundColor: "#ff6767", // fallback color
//       }}
//     >
//       <div className="flex flex-col md:flex-row bg-white rounded-2xl shadow-xl w-full max-w-5xl overflow-hidden">
//         {/* Left side image */}
//         <div className="hidden md:flex w-1/2 items-center justify-center">
//           <img
//             src="/assets/SignUp.png"
//             alt="Sign Up Illustration"
//             className="w-3/4 h-auto"
//           />
//         </div>

//         {/* Right side form */}
//         <div className="w-full md:w-1/2 p-10">
//           <h2 className="text-3xl font-bold text-gray-800 mb-6">Sign Up</h2>

//           <form onSubmit={handleSubmit} className="space-y-5">
//             {[
//               { name: "firstName", placeholder: "Enter First Name", icon: "/assets/firstName.png" },
//               { name: "lastName", placeholder: "Enter Last Name", icon: "/assets/lastName.png" },
//               { name: "username", placeholder: "Enter Username", icon: "/assets/username.png" },
//               { name: "email", placeholder: "Enter Email", type: "email", icon: "/assets/email.png" },
//               { name: "password", placeholder: "Enter Password", type: "password", icon: "/assets/Password.png" },
//               { name: "confirmPassword", placeholder: "Confirm Password", type: "password", icon: "/assets/confirmPass.png" },
//             ].map((field) => (
//               <div key={field.name}>
//                 <div className="relative">
//                   <img
//                     src={field.icon}
//                     alt="icon"
//                     className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5"
//                   />
//                   <input
//                     type={field.type || "text"}
//                     name={field.name}
//                     placeholder={field.placeholder}
//                     value={formData[field.name as keyof typeof formData] as string}
//                     onChange={handleChange}
//                     className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:border-[#ff6767] focus:ring-2 focus:ring-[#ff6767] outline-none"
//                   />
//                 </div>
//                 {errors[field.name] && (
//                   <p className="text-red-500 text-sm mt-1">{errors[field.name]}</p>
//                 )}
//               </div>
//             ))}

//             {/* Checkbox */}
//             <div className="flex items-center">
//               <input
//                 type="checkbox"
//                 id="agree"
//                 name="agree"
//                 checked={formData.agree}
//                 onChange={handleChange}
//                 className="mr-2"
//               />
//               {/* ✅ clicking text also toggles checkbox */}
//               <label htmlFor="agree" className="text-sm text-gray-600 cursor-pointer">
//                 I agree to the terms & conditions
//               </label>
//             </div>
//             {errors.agree && <p className="text-red-500 text-sm">{errors.agree}</p>}

//             {/* Button */}
//             <button
//               type="submit"
//               disabled={!formData.agree}
//               className={`w-full py-3 rounded-lg text-white font-semibold transition ${
//                 formData.agree
//                   ? "bg-[#ff6767] hover:bg-[#e05555]"
//                   : "bg-gray-400 cursor-not-allowed"
//               }`}
//             >
//               Register
//             </button>

//             {/* Sign in text */}
//             <p className="text-left text-sm text-gray-600">
//               Already have an account?{" "}
//               <Link
//                 to="/signin"
//                 className="text-[#008BD9] font-semibold hover:underline"
//               >
//                 Sign In
//               </Link>
//             </p>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default SignUp;
















import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

function SignUp() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
    agree: false,
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const validate = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.firstName) newErrors.firstName = "First name is required";
    if (!formData.lastName) newErrors.lastName = "Last name is required";
    if (!formData.username) newErrors.username = "Username is required";

    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Enter a valid email (e.g. example@gmail.com)";
    }

    if (!formData.password) {
      newErrors.password = "Password is required";
    } else if (formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }

    if (!formData.confirmPassword) {
      newErrors.confirmPassword = "Confirm your password";
    } else if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
    }

    if (!formData.agree) newErrors.agree = "You must accept the terms";

    return newErrors;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setLoading(true);

    try {
      // fetch existing users from json-server
      const res = await fetch("http://localhost:5000/users");
      const existingUsers = await res.json();

      if (existingUsers.some((u: any) => u.username === formData.username)) {
        setErrors({ username: "Username already taken" });
        setLoading(false);
        return;
      }
      if (existingUsers.some((u: any) => u.email === formData.email)) {
        setErrors({ email: "Email already registered" });
        setLoading(false);
        return;
      }

      // create new user object with unique id
      const newUser = {
        id: Date.now(),
        firstName: formData.firstName,
        lastName: formData.lastName,
        username: formData.username,
        email: formData.email,
        password: formData.password, // ⚠️ should hash later
      };

      // save to DB
      await fetch("http://localhost:5000/users", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newUser),
      });

      // save to localStorage
      localStorage.setItem("user", JSON.stringify(newUser));

      navigate("/dashboard");
    } catch (err) {
      console.error("Signup error:", err);
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
        {/* Left side image */}
        <div className="hidden md:flex w-1/2 items-center justify-center">
          <img
            src="/assets/SignUp.png"
            alt="Sign Up Illustration"
            className="w-3/4 h-auto"
          />
        </div>

        {/* Right side form */}
        <div className="w-full md:w-1/2 p-10">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Sign Up</h2>

          <form onSubmit={handleSubmit} className="space-y-5">
            {[
              { name: "firstName", placeholder: "Enter First Name", icon: "/assets/firstName.png" },
              { name: "lastName", placeholder: "Enter Last Name", icon: "/assets/lastName.png" },
              { name: "username", placeholder: "Enter Username", icon: "/assets/username.png" },
              { name: "email", placeholder: "Enter Email", type: "email", icon: "/assets/email.png" },
              { name: "password", placeholder: "Enter Password", type: "password", icon: "/assets/Password.png" },
              { name: "confirmPassword", placeholder: "Confirm Password", type: "password", icon: "/assets/confirmPass.png" },
            ].map((field) => (
              <div key={field.name}>
                <div className="relative">
                  <img
                    src={field.icon}
                    alt="icon"
                    className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5"
                  />
                  <input
                    type={field.type || "text"}
                    name={field.name}
                    placeholder={field.placeholder}
                    value={formData[field.name as keyof typeof formData] as string}
                    onChange={handleChange}
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:border-[#ff6767] focus:ring-1 focus:ring-[#ff6767] outline-none"
                  />
                </div>
                {errors[field.name] && (
                  <p className="text-red-500 text-sm mt-1">{errors[field.name]}</p>
                )}
              </div>
            ))}

            {/* Checkbox */}
            <div className="flex items-center">
              <input
                type="checkbox"
                id="agree"
                name="agree"
                checked={formData.agree}
                onChange={handleChange}
                className="mr-2"
              />
              <label htmlFor="agree" className="text-sm text-gray-600 cursor-pointer">
                I agree to the terms & conditions
              </label>
            </div>
            {errors.agree && <p className="text-red-500 text-sm">{errors.agree}</p>}

            {/* Button */}
            <button
              type="submit"
              disabled={loading || !formData.agree}
              className={`w-full py-3 rounded-lg text-white font-semibold transition ${
                formData.agree
                  ? "bg-[#ff6767] hover:bg-[#e05555]"
                  : "bg-gray-400 cursor-not-allowed"
              }`}
            >
              {loading ? "Registering..." : "Register"}
            </button>

            {/* Sign in text */}
            <p className="text-left text-sm text-gray-600">
              Already have an account?{" "}
              <Link
                to="/signin"
                className="text-[#008BD9] font-semibold hover:underline"
              >
                Sign In
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
