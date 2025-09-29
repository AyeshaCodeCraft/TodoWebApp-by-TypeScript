





import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import SignUp from "./pages/Auth/SignUp/SignUp";
import SignIn from "./pages/Auth/SignIn/SignIn"; 


function App() {
  return (
    <Router>
      <Routes>
        {/* Public routes */}
        <Route path="/" element={<Home />} />

        <Route path="/signup" element={<SignUp />} />

        {/* ✅ Add this route to test SignIn */}
        <Route path="/signin" element={<SignIn />} />

        {/* Later you can wrap them with PublicRoute / ProtectedRoute */}
      </Routes>
    </Router>
  );
}

export default App;












// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Home from "./pages/Home/Home";
// import SignUp from "./pages/Auth/SignUp/SignUp";
// import SignIn from "./pages/Auth/SignIn/SignIn"; 
// import PublicRoute from "./routes/PublicRoute";
// import ProtectedRoute from "./routes/ProtectedRoute";

// function Categories() {
//   return <div style={{ paddingLeft: "380px" }}>Categories Page</div>;
// }
// function Help() {
//   return <div style={{ paddingLeft: "380px" }}>Help Page</div>;
// }

// function Dashboard() {
//   return <div style={{ paddingLeft: "380px" }}>Dashboard Page</div>;
// }

// function App() {
//   return (
//     <Router>
//       <Routes>
//         {/* Public route (always accessible) */}
//         <Route path="/" element={<Home />} />

//         {/* Public auth routes (redirect if logged in) */}
//         <Route
//           path="/signup"
//           element={
//             <PublicRoute>
//               <SignUp />
//             </PublicRoute>
//           }
//         />
//         <Route
//           path="/signin"
//           element={
//             <PublicRoute>
//               <SignIn />
//             </PublicRoute>
//           }
//         />

//         {/* Protected route (only for logged-in users) */}
//         <Route
//           path="/dashboard"
//           element={
//             <ProtectedRoute>
//               <Dashboard />
//             </ProtectedRoute>
//           }
//         />

//         {/* Example additional protected routes */}
//         <Route
//           path="/categories"
//           element={
//             <ProtectedRoute>
//               <Categories />
//             </ProtectedRoute>
//           }
//         />
//         <Route
//           path="/help"
//           element={
//             <ProtectedRoute>
//               <Help />
//             </ProtectedRoute>
//           }
//         />
//       </Routes>
//     </Router>
//   );
// }

// export default App;
