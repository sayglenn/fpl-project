import { auth, signOut } from "@/auth";
import { redirect } from "next/navigation";
import AccountHeader from "@/src/components/account/AccountHeader";

export default async function Page() {
  const session = await auth();

  if (!session) {
    console.log(session);
    redirect("/account/login");
  }

  return (
    <>
      <div className="flex flex-col items-center">
        <AccountHeader />
        <div className="flex flex-col mt-8 w-full lg:w-[340px]">
          <p className="text-2xl font-bold underline mb-4 self-center">
            Your Profile
          </p>
          <div className="flex flex-col gap-2">
            <p className="text-lg italic ml-1">Name:</p>
            <div className="w-full bg-white text-purple-500 border border-purple-500 text-center font-bold py-3 rounded-xl">
              <p>{session.user?.name}</p>
            </div>
            <p className="text-lg italic mt-3 ml-1">Email:</p>
            <div className="w-full bg-white text-purple-500 border border-purple-500 text-center font-bold py-3 rounded-xl">
              <p>{session.user?.email}</p>
            </div>
          </div>
          <form
            className="mt-12"
            action={async () => {
              "use server";
              await signOut();
            }}
          >
            <button
              className="font-bold border-2 bg-purple-500 text-white border-white w-full py-3 rounded-xl transition duration-300
                hover:bg-white hover:text-purple-500 hover:border-purple-500 hover:-translate-y-1 hover:shadow-2xl"
            >
              Sign Out
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
