import React, { useState } from "react";
function User() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const [errors, setErrors] = useState<{ email: string; password: string }>({
  //   email: "",
  //   password: "",
  // });
  const [errors, setErrors] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    setErrors({ email: "", password: "" });

    console.log(email.includes("@"));
    if (!email.includes("@")) {
      console.log("email failed");
      setErrors({ ...errors, email: "Invalid Email!" });
      console.log(errors);
    }

    if (password.length < 8) {
      setErrors({ ...errors, password: "Invaliad Password!" });
    } else {
      setErrors({ ...errors, password: "" });
    }

    if (errors.email !== "" || errors.password !== "") {
      console.log("Form Submitted");
    }
  };

  return (
    <div>
      <form className="form">
        <input
          type="text"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="textBox"
        />
        {errors.email && <div style={{ color: "red" }}>{errors.email}</div>}
        <input
          type="text"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="textBox"
        />
        {errors.password && (
          <div style={{ color: "red" }}>{errors.password}</div>
        )}
        <button type="submit" onClick={handleSubmit}>
          Submit
        </button>
      </form>
    </div>
  );
}

export default User;
