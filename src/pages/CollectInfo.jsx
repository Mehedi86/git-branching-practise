import React from "react";
import { useForm } from "react-hook-form";

const CollectInfo = () => {
  // useForm hook initialize করা
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm();

  // Form submit function
  const onSubmit = (data) => {
    console.log("Form Data:", data);
    alert("Form submitted successfully!");
    reset(); // form clear করার জন্য
  };

  return (
    <div style={{ maxWidth: "400px", margin: "50px auto" }}>
      <h2 style={{ textAlign: "center" }}>React Hook Form Example</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* Name Input */}
        <div style={{ marginBottom: "15px" }}>
          <label>Name:</label>
          <input
            {...register("name", { required: "Name is required" })}
            placeholder="Enter your name"
            style={{ width: "100%", padding: "8px", marginTop: "5px" }}
          />
          {errors.name && (
            <p style={{ color: "red", marginTop: "5px" }}>
              {errors.name.message}
            </p>
          )}
        </div>

        {/* Email Input */}
        <div style={{ marginBottom: "15px" }}>
          <label>Email:</label>
          <input
            {...register("email", {
              required: "Email is required",
              pattern: {
                value:
                  /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                message: "Invalid email address",
              },
            })}
            placeholder="Enter your email"
            style={{ width: "100%", padding: "8px", marginTop: "5px" }}
          />
          {errors.email && (
            <p style={{ color: "red", marginTop: "5px" }}>
              {errors.email.message}
            </p>
          )}
        </div>

        {/* Password Input */}
        <div style={{ marginBottom: "15px" }}>
          <label>Password:</label>
          <input
            type="password"
            {...register("password", {
              required: "Password is required",
              minLength: {
                value: 6,
                message: "Password must be at least 6 characters",
              },
            })}
            placeholder="Enter your password"
            style={{ width: "100%", padding: "8px", marginTop: "5px" }}
          />
          {errors.password && (
            <p style={{ color: "red", marginTop: "5px" }}>
              {errors.password.message}
            </p>
          )}
        </div>

        <button
          type="submit"
          style={{
            width: "100%",
            padding: "10px",
            backgroundColor: "#007bff",
            color: "white",
            border: "none",
            cursor: "pointer",
          }}
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default CollectInfo;
