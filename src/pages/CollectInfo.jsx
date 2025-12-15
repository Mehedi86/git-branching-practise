import React, { useState } from "react";
import { useForm } from "react-hook-form";

const CollectInfo = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const [showPassword, setShowPassword] = useState(false);

  const onSubmit = (data) => {
    console.log("Form Data:", data);
    console.log("Uploaded Image:", data.image[0]);
    alert("Form submitted successfully!");
    reset();
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h2 style={styles.title}>Collect Information</h2>

        <form onSubmit={handleSubmit(onSubmit)}>
          {/* Name */}
          <div style={styles.field}>
            <label>Name</label>
            <input
              style={styles.input}
              placeholder="Enter your name"
              {...register("name", { required: "Name is required" })}
            />
            {errors.name && <p style={styles.error}>{errors.name.message}</p>}
          </div>

          {/* Email */}
          <div style={styles.field}>
            <label>Email</label>
            <input
              style={styles.input}
              placeholder="Enter your email"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: "Invalid email address",
                },
              })}
            />
            {errors.email && (
              <p style={styles.error}>{errors.email.message}</p>
            )}
          </div>

          {/* Password with Show / Hide */}
          <div style={styles.field}>
            <label>Password</label>
            <div style={styles.passwordWrapper}>
              <input
                type={showPassword ? "text" : "password"}
                style={styles.passwordInput}
                placeholder="Enter password"
                {...register("password", {
                  required: "Password is required",
                  minLength: {
                    value: 6,
                    message: "Minimum 6 characters",
                  },
                })}
              />
              <button
                type="button"
                style={styles.toggleBtn}
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? "Hide" : "Show"}
              </button>
            </div>
            {errors.password && (
              <p style={styles.error}>{errors.password.message}</p>
            )}
          </div>

          {/* Image Upload */}
          <div style={styles.field}>
            <label>Upload Image</label>
            <input
              type="file"
              accept="image/*"
              {...register("image", {
                required: "Image is required",
              })}
            />
            {errors.image && (
              <p style={styles.error}>{errors.image.message}</p>
            )}
          </div>

          <button type="submit" style={styles.submitBtn}>
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default CollectInfo;


const styles = {
  container: {
    minHeight: "100vh",
    backgroundColor: "#f4f6f8",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  card: {
    width: "100%",
    maxWidth: "420px",
    backgroundColor: "#fff",
    padding: "25px",
    borderRadius: "10px",
    boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
  },
  title: {
    textAlign: "center",
    marginBottom: "20px",
  },
  field: {
    marginBottom: "15px",
    display: "flex",
    flexDirection: "column",
  },
  input: {
    padding: "10px",
    marginTop: "5px",
    borderRadius: "5px",
    border: "1px solid #ccc",
  },
  passwordWrapper: {
    display: "flex",
    marginTop: "5px",
  },
  passwordInput: {
    flex: 1,
    padding: "10px",
    borderRadius: "5px 0 0 5px",
    border: "1px solid #ccc",
    borderRight: "none",
  },
  toggleBtn: {
    padding: "10px",
    border: "1px solid #ccc",
    backgroundColor: "#eee",
    cursor: "pointer",
    borderRadius: "0 5px 5px 0",
  },
  submitBtn: {
    marginTop: "10px",
    padding: "12px",
    backgroundColor: "#007bff",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    fontSize: "16px",
  },
  error: {
    color: "red",
    fontSize: "13px",
    marginTop: "5px",
  },
};
