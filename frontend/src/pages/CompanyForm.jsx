import React, { useState } from "react";
import axios from "axios";
import "../css/CompanyForm.css"; // ✅ Add this

const CompanyForm = () => {
  const [form, setForm] = useState({
    name: "",
    industry: "",
    location: "",
    size: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:5000/api/companies", form);
      alert("Company added successfully!");
      setForm({ name: "", industry: "", location: "", size: "" });
    } catch (err) {
      console.error(err);
      alert("Error adding company");
    }
  };

  return (
    <div className="company-form-container">
      <h2 className="form-title">Add a Company</h2>
      <form className="company-form" onSubmit={handleSubmit}>
        
        <div className="form-group">
          <label>Company Name *</label>
          <input
            type="text"
            name="name"
            placeholder="e.g. TechCorp Inc."
            value={form.name}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Industry</label>
          <input
            type="text"
            name="industry"
            placeholder="e.g. Technology"
            value={form.industry}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label>Location</label>
          <input
            type="text"
            name="location"
            placeholder="e.g. San Francisco, CA"
            value={form.location}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label>Company Size</label>
          <input
            type="text"
            name="size"
            placeholder="e.g. 1000-5000 employees"
            value={form.size}
            onChange={handleChange}
          />
        </div>

        <button type="submit" className="submit-btn">Add Company</button>
      </form>
    </div>
  );
};

export default CompanyForm;
