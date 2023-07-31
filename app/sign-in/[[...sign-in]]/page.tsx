



import { SignIn } from "@clerk/nextjs";

export default function Page() {
  return (
    <div className="relative min-h-screen min-w-full  bg-[url('/hero.jpg')] bg-cover bg-no-repeat bg-center bg-fixed lg:opacity-80 bg-black">
      <div className="">
        <SignIn afterSignInUrl={'/Profile'} />
      </div>
    </div>
  )
}