

import { useEffect, useState } from "react";
import type { ChangeEvent, FormEvent } from "react";
import { useNavigate } from "react-router-dom";

interface User {
  id?: string | number;
  firstName?: string;
  lastName?: string;
  username?: string;
  email?: string;
  password?: string;
  todos?: any[];
}

function Settings() {
  const navigate = useNavigate();
  const storedUser: User = JSON.parse(localStorage.getItem("user") || "{}");

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    username: "",
    email: "",
  });

  const [passwordForm, setPasswordForm] = useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  const [isUpdatingPassword, setIsUpdatingPassword] = useState(false);

  useEffect(() => {
    setFormData({
      firstName: storedUser.firstName || "",
      lastName: storedUser.lastName || "",
      username: storedUser.username || "",
      email: storedUser.email || "",
    });
  }, []);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setPasswordForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleUpdate = async (e: FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch(`http://localhost:5000/users/${storedUser.id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!response.ok) throw new Error("Failed to update user info");

      localStorage.setItem("user", JSON.stringify({ ...storedUser, ...formData }));
      alert("User info updated successfully!");
    } catch (err) {
      console.error("Update failed:", err);
      alert("Update failed. Check console for details.");
    }
  };

  const handlePasswordUpdate = async (e: FormEvent) => {
    e.preventDefault();

    const { currentPassword, newPassword, confirmPassword } = passwordForm;

    if (currentPassword !== storedUser.password) {
      alert("Current password does not match.");
      return;
    }

    if (newPassword !== confirmPassword) {
      alert("New password and confirm password do not match.");
      return;
    }

    try {
      const response = await fetch(`http://localhost:5000/users/${storedUser.id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password: newPassword }),
      });

      if (!response.ok) throw new Error("Failed to update password");

      localStorage.setItem("user", JSON.stringify({ ...storedUser, password: newPassword }));
      alert("Password updated successfully!");

      setPasswordForm({ currentPassword: "", newPassword: "", confirmPassword: "" });
      setIsUpdatingPassword(false);
    } catch (err) {
      console.error("Password update failed:", err);
      alert("Password update failed. Check console for details.");
    }
  };

  return (
    <div className="px-4 sm:px-6 lg:px-8 w-full">
      <div className="w-full max-w-5xl mx-auto border border-gray-300 rounded-xl p-6 bg-[#F5F8FF]">
        {/* Header */}
        <div className="flex justify-between items-center">
          <h2 className="text-black font-inter font-semibold text-2xl">
            {isUpdatingPassword ? "Change Password" : "Account Information"}
          </h2>
          <button
            onClick={() => navigate("/dashboard")}
            className="bg-none border-none text-black underline cursor-pointer font-montserrat font-semibold text-sm"
          >
            Go Back
          </button>
        </div>

        <hr className="border-b-2 border-red-600 my-2 mb-5 max-w-[161px]" />

        {/* User Info Form */}
        {!isUpdatingPassword && (
          <>
            <div className="mb-6 text-sm">
              <p className="font-inter font-semibold text-lg text-black mt-10 mb-1">
                {storedUser.firstName} {storedUser.lastName}
              </p>
              <p>{storedUser.email}</p>
            </div>

            <div className="border border-gray-300 rounded-xl p-8">
              <form onSubmit={handleUpdate} className="space-y-4">
                {["firstName", "lastName", "username", "email"].map((field) => (
                  <div key={field} className="flex flex-col w-full">
                    <label className="mb-2 text-black font-montserrat font-semibold text-sm capitalize">
                      {field === "email" ? "Email Address" : field}
                    </label>
                    <input
                      type={field === "email" ? "email" : "text"}
                      name={field}
                      value={formData[field as keyof typeof formData]}
                      onChange={handleChange}
                      className="p-3 border border-gray-300 rounded-lg text-sm bg-[#F5F8FF] outline-none w-full"
                    />
                  </div>
                ))}

                {/* Buttons */}
                <div className="flex flex-wrap gap-3 mt-8">
                  <button
                    type="submit"
                    className="px-6 py-2 bg-[#F24E1E] text-white rounded-lg font-montserrat font-medium text-sm cursor-pointer"
                  >
                    Update Info
                  </button>
                  <button
                    type="button"
                    onClick={() => setIsUpdatingPassword(true)}
                    className="px-6 py-2 border border-red-600 bg-[#F24E1E] text-white rounded-lg font-montserrat font-medium text-sm cursor-pointer"
                  >
                    Change Password
                  </button>
                </div>
              </form>
            </div>
          </>
        )}

        {/* Password Form */}
        {isUpdatingPassword && (
          <div className="border border-gray-300 rounded-xl p-8">
            <form onSubmit={handlePasswordUpdate} className="space-y-4">
              {["currentPassword", "newPassword", "confirmPassword"].map((field) => (
                <div key={field} className="flex flex-col w-full">
                  <label className="mb-2 text-black font-montserrat font-semibold text-sm capitalize">
                    {field.replace("Password", " Password")}
                  </label>
                  <input
                    type="password"
                    name={field}
                    value={passwordForm[field as keyof typeof passwordForm]}
                    onChange={handlePasswordChange}
                    className="p-3 border border-gray-300 rounded-lg text-sm bg-[#F5F8FF] outline-none w-full"
                  />
                </div>
              ))}

              <div className="flex flex-wrap gap-3 mt-8">
                <button
                  type="submit"
                  className="px-6 py-2 bg-[#F24E1E] text-white rounded-lg font-montserrat font-medium text-sm cursor-pointer"
                >
                  Update Password
                </button>
                <button
                  type="button"
                  onClick={() => setIsUpdatingPassword(false)}
                  className="px-6 py-2 border border-red-600 bg-[#F24E1E] text-white rounded-lg font-montserrat font-medium text-sm cursor-pointer"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}

export default Settings;
