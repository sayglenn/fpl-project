"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Spinner } from "@/src/components/ui/Spinner";
import { useForm } from "react-hook-form";
import type { FieldValues } from "react-hook-form";
import SignUpComplete from "@/src/components/account/signup/SignUpComplete";

export default function Page() {
  const router = useRouter();
  const [loaded, setLoaded] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");
  const [showDialog, setShowDialog] = useState(false);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    reset,
  } = useForm({
    reValidateMode: "onSubmit",
  });

  useEffect(() => setLoaded(true), []);

  const registerUser = async (data: FieldValues) => {
    setSubmitting(true);
    setError("");
    try {
      const response = await fetch("/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      if (!response.ok) {
        const errorMessage = await response.text();
        setError(errorMessage);
        setSubmitting(false);
        return;
      }
      setSubmitting(false);
      reset();
      setShowDialog(true);
    } catch (error) {
      setError("An error occurred. Please try again.");
      setSubmitting(false);
    }
  };

  const nameValue = watch("name", "");
  const emailValue = watch("email", "");
  const passwordValue = watch("password", "");

  const fieldClass =
    "w-full p-3 border border-gray-300 placeholder:font-[300] placeholder:text-[15px]";
  const errorClass = "text-red-500 text-[12px] mt-1";
  const labelClass =
    "absolute left-3 -top-2 text-gray-400 text-[12px] font-medium bg-white px-1 peer-placeholder-shown:top-3 peer-placeholder-shown:text-base";

  return (
    <>
      <div className="flex flex-col mt-6 items-center">
        <div className="border-b-2 border-gray-300 p-3 flex flex-col items-center">
          <p
            className={`text-center text-4xl font-bold transition-all duration-1000 mb-1 ${
              loaded ? "translate-y-0 opacity-100" : "translate-y-5 opacity-0"
            }`}
          >
            Sign Up
          </p>
          <p
            className={`text-center italic text-md transform text-gray-500 transition-all delay-200 duration-1000 ${
              loaded ? "translate-y-0 opacity-100" : "translate-y-5 opacity-0"
            }`}
          >
            Sign up for a brand new account!
          </p>
        </div>
      </div>
      <div className="flex flex-col items-center my-2">
        <form className="w-[400px]" onSubmit={handleSubmit(registerUser)}>
          <div className="relative mt-4">
            <input
              placeholder="Name"
              id="name"
              className={`${fieldClass} ${errors.name ? "border-red-500" : ""}`}
              {...register("name", { required: "Name is required" })}
            ></input>
            <label
              htmlFor="name"
              className={`${labelClass} transition-all duration-200 transform
                ${
                  nameValue
                    ? " opacity-100 translate-y-0"
                    : " opacity-0 translate-y-4"
                }`}
            >
              Name
            </label>
            {errors.name && (
              <p className={errorClass}>{errors.name.message as string}</p>
            )}
          </div>
          <div className="relative mt-4">
            <input
              placeholder="Email"
              id="email"
              className={`${fieldClass} ${
                errors.email ? "border-red-500" : ""
              }`}
              {...register("email", {
                required: "Email is required",
                validate: (value) =>
                  /\S+@\S+\.\S+/.test(value) || "Email address is invalid",
              })}
            ></input>
            <label
              htmlFor="email"
              className={`${labelClass} transition-all duration-200 transform
                ${
                  emailValue
                    ? " opacity-100 translate-y-0"
                    : " opacity-0 translate-y-4"
                }`}
            >
              Email
            </label>
            {errors.email && (
              <p className={errorClass}>{errors.email.message as string}</p>
            )}
          </div>
          <div className="relative mt-4">
            <input
              placeholder="Password"
              type="password"
              id="password"
              className={`${fieldClass} ${
                errors.password ? "border-red-500" : ""
              }`}
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 8,
                  message: "Password must be at least 8 characters long.",
                },
              })}
            ></input>
            <label
              htmlFor="password"
              className={`${labelClass} transition-all duration-200 transform
                ${
                  passwordValue
                    ? " opacity-100 translate-y-0"
                    : " opacity-0 translate-y-4"
                }`}
            >
              Password
            </label>
            {errors.password && (
              <p className={errorClass}>{errors.password.message as string}</p>
            )}
          </div>
          <button
            disabled={submitting}
            type="submit"
            className={`mt-5 w-full border-[3px] border-purple-500 bg-purple-500 text-white rounded-xl font-bold hover:bg-white hover:text-purple-500 ${
              submitting ? "py-0" : "py-3"
            }`}
          >
            {submitting ? <Spinner /> : "Sign Up"}
          </button>
        </form>
        {error && <p className="text-red-500 mt-2">{error}</p>}
        <p className="italic text-gray-400 mt-2">
          Already have an account? Log in{" "}
          <Link href="/account/login" className="text-blue-600 hover:underline">
            here!
          </Link>
        </p>
        <SignUpComplete
          isDialogOpen={showDialog}
          setDialog={() => setShowDialog(false)}
        />
      </div>
    </>
  );
}
