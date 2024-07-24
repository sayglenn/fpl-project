"use client";

import { redirect } from "next/navigation";
import { signIn, auth, providerMap } from "@/auth";
import { AuthError } from "next-auth";
import { useForm } from "react-hook-form";
import Link from "next/link";
import { loginSubmit } from "@/src/lib/forms";

export default function Page() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    reset,
  } = useForm({
    reValidateMode: "onSubmit",
  });

  const emailValue = watch("email", "");
  const passwordValue = watch("password", "");

  const fieldClass =
    "w-full p-3 border border-gray-300 placeholder:font-[300] placeholder:text-[15px]";
  const errorClass = "text-red-500 text-[12px] mt-1";
  const labelClass =
    "absolute left-3 -top-2 text-gray-400 text-[12px] font-medium bg-white px-1 peer-placeholder-shown:top-3 peer-placeholder-shown:text-base";

  return (
    <>
      <div className="flex flex-col items-center mt-6">
        <div className="p-3 border-b-2 border-gray-300 flex flex-col items-center">
          <p className="text-4xl font-bold mb-1">Sign In</p>
          <p className="text-center italic text-md transform text-gray-500">
            Log in to your account.
          </p>
        </div>
        <form
          // action={async (formData) => {
          //   "use server";
          //   await signIn("credentials", formData);
          // }}
          onSubmit={handleSubmit(async (data) => {
            console.log(data);
          })}
          className="p-3 w-[400px]"
        >
          <div className="relative mt-3">
            <input
              {...register("email", {
                required: "Email is required",
                validate: (value) =>
                  /\S+@\S+\.\S+/.test(value) || "Email address is invalid",
              })}
              placeholder="Email"
              id="email"
              className={`${fieldClass} ${
                errors.email ? "border-red-500" : ""
              }`}
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
          <div className="relative mt-3">
            <input
              {...register("password", {
                required: "Password is required",
              })}
              placeholder="Password"
              type="password"
              id="password"
              className={`${fieldClass} ${
                errors.email ? "border-red-500" : ""
              }`}
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
          <button className="mt-5 w-full border-[3px] border-purple-500 py-3 text-white bg-purple-500 rounded-xl font-bold hover:bg-white hover:text-purple-500">
            Sign In
          </button>
        </form>
        <p className="italic text-gray-400">
          Don&apos;t have an account? Sign up{" "}
          <Link
            href="/account/signup"
            className="text-blue-600 hover:underline"
          >
            here!
          </Link>
        </p>
      </div>
    </>
  );
}
