import React from "react";
import { useForm } from "react-hook-form";

function UserFormHookWithPrepopulatedData() {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting },
  } = useForm({
    defaultValues: {
      email: "test@gmail.com",
      password: "TestPassword",
    },
  });
  const onSubmit = async (data) => {
    try {
      await new Promise((resolve) => setTimeout(resolve, 2000));
      throw new Error();
    } catch (error) {
      // Error will be shown under specific element
      // setError("email", {
      //   message: "This eamil already taken.",
      // });

      // Error will be shown under whole form
      setError("root", {
        message: "This eamil already taken.",
      });
    }
  };

  console.log(errors);

  return (
    <div>
      <form className="form" onSubmit={handleSubmit(onSubmit)}>
        <input
          type="text"
          placeholder="Email"
          className="email"
          {...register("email", {
            required: "Email is reuired",
            validate: (value) => {
              if (!value.includes("@")) {
                return "Email must include @";
              }
              return true;
            },
          })}
        />
        {errors.email && <p className="error">{errors.email.message} </p>}
        <input
          type="password"
          placeholder="Password"
          className="password"
          {...register("password", {
            required: "Password is required",
            minLength: {
              value: 8,
              message: "Password must be at least 8 char",
            },
          })}
        />
        {errors.password && <p className="error">{errors.password.message} </p>}
        <button type="submit" className="submit" disabled={isSubmitting}>
          {isSubmitting ? "Loading..." : "Submit"}
        </button>
        {errors.root && <p className="error">{errors.root.message} </p>}
      </form>
    </div>
  );
}

export default UserFormHookWithPrepopulatedData;
