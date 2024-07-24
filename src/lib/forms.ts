"use server";

import { FieldValues } from "react-hook-form";
import { signIn, signOut } from "@/auth";
  
export const authenticate = async (data: FieldValues) => {
  "use server";
  await signIn("credentials", {
    ...data,
    redirect: false,
  });
};