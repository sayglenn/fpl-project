"use server";

import { SubmitHandler } from "react-hook-form";

type FormValues = {
  name: string,
  email: string,
  password: string,
}
  
export const loginSubmit: SubmitHandler<FormValues> = async (data) => {
  "use server";
  console.log(data);
};