import React, { useState } from "react";

function Register() {
  const [formData, setFormData] = useState({
    name: "",
    number: "",
    email: "",
    password: "",
    terms: false,
  });
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.terms) {
      setMessage("You must accept the terms and conditions.");
      return;
    }

    setLoading(true);
    setMessage("");

    try {
      const response = await fetch("api-hit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          phone: formData.number,
          email: formData.email,
          password: formData.password,
          date: formData.date
        }),
      });

      const result = await response.json();

      if (response.ok) {
        setMessage("Registration successful!");
      } else {
        setMessage(result.message || "Registration failed!");
      }
    } catch (error) {
      setMessage("An error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <form onSubmit={handleSubmit} className="w-full max-w-sm bg-white p-6 rounded-lg shadow-md">
        <h3 className="text-gray-800 text-xl font-bold mb-6 text-center">Create an account</h3>
        <div className="space-y-4">
          <div>
            <label className="text-gray-600 text-sm mb-2 block">Name</label>
            <input name="name" type="text" required value={formData.name} onChange={handleChange} className="w-full text-gray-800 bg-white border border-gray-300 text-sm p-2.5 rounded-md outline-blue-500" placeholder="Enter name" />
          </div>
          <div>
            <label className="text-gray-600 text-sm mb-2 block">Phone</label>
            <input name="number" type="text" required value={formData.number} onChange={handleChange} className="w-full text-gray-800 bg-white border border-gray-300 text-sm p-2.5 rounded-md outline-blue-500" placeholder="Enter Mobile Number" />
          </div>
          <div>
            <label className="text-gray-600 text-sm mb-2 block">Email</label>
            <input name="email" type="email" required value={formData.email} onChange={handleChange} className="w-full text-gray-800 bg-white border border-gray-300 text-sm p-2.5 rounded-md outline-blue-500" placeholder="Enter email" />
          </div>
          <div>
            <label className="text-gray-600 text-sm mb-2 block">Password</label>
            <input name="password" type="password" required value={formData.password} onChange={handleChange} className="w-full text-gray-800 bg-white border border-gray-300 text-sm p-2.5 rounded-md outline-blue-500" placeholder="Enter password" />
          </div>
          <div>
            <label className="text-gray-700 text-sm mb-1 block">Date of Birth</label>
            <input
              type="date"
              name="dob"
              className="w-full p-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
          <div className="flex items-center">
            <input id="terms" name="terms" type="checkbox" checked={formData.terms} onChange={handleChange} className="h-4 w-4 text-blue-600 border-gray-300 rounded" />
            <label htmlFor="terms" className="ml-2 text-sm text-gray-600">
              I accept the <a href="#" className="text-blue-600 font-semibold hover:underline">Terms and Conditions</a>
            </label>
          </div>
          <button type="submit" disabled={loading} className="w-full py-2 text-white bg-blue-700 hover:bg-blue-800 rounded-md text-sm font-semibold">
            {loading ? "Creating..." : "Create an account"}
          </button>
          {message && <p className="text-center text-sm text-red-600 mt-2">{message}</p>}
          <p className="text-gray-600 text-sm text-center">Already have an account? <a href="#" className="text-blue-600 font-semibold hover:underline">Login here</a></p>
        </div>
      </form>
    </div>
  );
}

export default Register;
