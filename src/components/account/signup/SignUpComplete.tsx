import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/src/components/ui/alert-dialog";
import Link from "next/link";

export default function SignUpComplete({
  isDialogOpen,
  setDialog,
}: {
  isDialogOpen: boolean;
  setDialog: () => void;
}) {
  return (
    <>
      <AlertDialog open={isDialogOpen} onOpenChange={setDialog}>
        <AlertDialogContent className="bg-purple-600 w-[80%] rounded-lg">
          <AlertDialogHeader>
            <AlertDialogTitle className="text-white text-center">
              Thank you for signing up!
            </AlertDialogTitle>
            <AlertDialogDescription className="text-white text-center">
              Thank you for signing up with an account! You can proceed to log
              in now.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter className="flex flex-row justify-center">
            <Link href="/account/login">
              <AlertDialogAction className="bg-white text-purple-600">
                Continue
              </AlertDialogAction>
            </Link>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
}
