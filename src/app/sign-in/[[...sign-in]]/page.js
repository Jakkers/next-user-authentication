import { SignIn } from "@clerk/nextjs";

export default function SignInPage() {
  return (
    <main className="flex flex-col items-center justify-between p-24">
      <h1 className="flex flex-col items-center p-24 text-5xl animate-pulse">
        Sign in to see fishes!
      </h1>
      <SignIn />
    </main>
  );
}
