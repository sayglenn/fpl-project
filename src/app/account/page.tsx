import { auth } from "@/auth";
import { redirect } from "next/navigation";

export default async function Page() {
  const session = await auth();

  if (!session) {
    redirect("/account/login");
  }

  return (
    <>
      <div className="flex flex-col items-center mt-14 border-b-2 border-gray-300 pb-3">
        <p className="text-4xl font-bold text-center mb-1">Account</p>
        <p className="text-center italic text-md transform text-gray-500">
          Your account page. You can view your profile, settings, and other
          account related stuff here.
        </p>
      </div>
    </>
  );
}
