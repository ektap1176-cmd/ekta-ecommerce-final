import React, { useState } from "react";
import { Link } from "react-router-dom";

const AccountPanel = () => {
  const [formData, setFormData] = useState({
    firstName: "Md",
    lastName: "Rimel",
    email: "rimel111@gmail.com",
    address: "Kingston, 5236, United States",
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  const [activeSection, setActiveSection] = useState("profile");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSave = () => alert("Changes saved successfully!");
  const handleCancel = () =>
    setFormData({
      firstName: "Md",
      lastName: "Rimel",
      email: "rimel111@gmail.com",
      address: "Kingston, 5236, United States",
      currentPassword: "",
      newPassword: "",
      confirmPassword: "",
    });

  return (
    <div className="min-h-screen bg-gray-50 pt-20 pb-12 px-4 sm:px-6 lg:px-12 overflow-x-hidden">
      
      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto mb-6 flex flex-col sm:flex-row justify-between gap-2">
        <div className="text-sm text-gray-600 flex gap-1">
          <Link to="/" className="hover:text-red-500 transition-colors">
            Home
          </Link>
          <span>/</span>
          <Link
            to="/account"
            className="text-gray-900 font-medium hover:text-red-500 transition-colors"
          >
            My Account
          </Link>
        </div>

        <p className="text-sm text-gray-700">
          Welcome! <span className="text-red-500 font-medium">Md Rimel</span>
        </p>
      </div>

      {/* Layout */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-4 gap-6">
        
        {/* Sidebar */}
        <aside className="bg-white rounded-lg shadow-sm p-4 lg:col-span-1">
          <h2 className="font-semibold text-lg mb-3">Manage My Account</h2>
          <ul className="space-y-2 mb-4">
            {["profile", "address", "payment"].map((item) => (
              <li key={item}>
                <button
                  onClick={() => setActiveSection(item)}
                  className={`w-full text-left px-3 py-2 rounded text-sm transition ${
                    activeSection === item
                      ? "bg-red-50 text-red-500"
                      : "text-gray-600 hover:bg-gray-100"
                  }`}
                >
                  {item === "profile"
                    ? "My Profile"
                    : item === "address"
                    ? "Address Book"
                    : "My Payment Options"}
                </button>
              </li>
            ))}
          </ul>

          <h2 className="font-semibold text-lg mb-3">My Orders</h2>
          <ul className="space-y-2">
            {["returns", "cancellations"].map((item) => (
              <li key={item}>
                <button className="w-full text-left px-3 py-2 text-sm text-gray-600 hover:bg-gray-100 rounded">
                  {item === "returns" ? "My Returns" : "My Cancellations"}
                </button>
              </li>
            ))}
          </ul>
        </aside>

        {/* Form */}
        <section className="bg-white rounded-lg shadow-sm p-4 sm:p-6 md:p-8 lg:col-span-3">
          <h2 className="text-xl font-semibold text-red-500 mb-6">
            Edit Your Profile
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            {["firstName", "lastName"].map((field) => (
              <div key={field}>
                <label className="block text-sm font-medium mb-1 capitalize">
                  {field.replace("Name", " Name")}
                </label>
                <input
                  type="text"
                  name={field}
                  value={formData[field]}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-gray-100 rounded focus:ring-2 focus:ring-black outline-none"
                />
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            {["email", "address"].map((field) => (
              <div key={field}>
                <label className="block text-sm font-medium mb-1 capitalize">
                  {field}
                </label>
                <input
                  type="text"
                  name={field}
                  value={formData[field]}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-gray-100 rounded focus:ring-2 focus:ring-black outline-none"
                />
              </div>
            ))}
          </div>

          <h3 className="text-sm font-medium text-gray-500 mb-2">
            Password Changes
          </h3>
          <div className="space-y-3">
            {["currentPassword", "newPassword", "confirmPassword"].map(
              (field) => (
                <input
                  key={field}
                  type="password"
                  name={field}
                  value={formData[field]}
                  onChange={handleInputChange}
                  placeholder={field.replace(/([A-Z])/g, " $1")}
                  className="w-full px-4 py-3 bg-gray-100 rounded focus:ring-2 focus:ring-black outline-none"
                />
              )
            )}
          </div>

          <div className="flex flex-col sm:flex-row justify-end gap-3 mt-6">
            <button
              onClick={handleCancel}
              className="px-6 py-3 bg-gray-100 rounded hover:bg-gray-200 w-full sm:w-auto"
            >
              Cancel
            </button>
            <button
              onClick={handleSave}
              className="px-6 py-3 bg-red-500 text-white rounded hover:bg-red-600 w-full sm:w-auto"
            >
              Save Changes
            </button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AccountPanel;
