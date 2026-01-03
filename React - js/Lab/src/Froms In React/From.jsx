import React, { useState } from "react";

const Form = () => {
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  const validate = () => {
    let newErrors = {};

    if (!data.name.trim()) newErrors.name = "Name is required";

    if (!data.email) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
      newErrors.email = "Invalid email address";
    }

    if (!data.password) {
      newErrors.password = "Password is required";
    } else if (data.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const saveData = (e) => {
    e.preventDefault();
    if (validate()) {
      alert("Form submitted successfully ✅");
      console.log(data);
    }
  };

  return (
    <form onSubmit={saveData}>
      <input
        name="name"
        placeholder="Enter name"
        value={data.name}
        onChange={handleChange}
      />
      {errors.name && <p style={{ color: "red" }}>{errors.name}</p>}

      <input
        name="email"
        placeholder="Enter email"
        value={data.email}
        onChange={handleChange}
      />
      {errors.email && <p style={{ color: "red" }}>{errors.email}</p>}

      <input
        type="password"
        name="password"
        placeholder="Enter password"
        value={data.password}
        onChange={handleChange}
      />
      {errors.password && <p style={{ color: "red" }}>{errors.password}</p>}

      <button type="submit">Submit</button>
    </form>
  );
};

export default Form;
