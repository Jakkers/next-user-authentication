import { SignUp } from "@clerk/nextjs";

export default function SignInPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="flex flex-col items-center p-24 text-5xl animate-pulse">
        Please give me your data for the first time!
      </h1>
      <SignUp />
    </main>
  );
}
