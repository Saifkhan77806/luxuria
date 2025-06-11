import { LoginForm } from "@/components/login-form"

export default function LoginPage() {
  return (
    <div className=" flex min-h-svh relative bg-black flex-col items-center justify-center p-6 md:p-10">
      <div className="absolute top-20 left-0 w-40 h-20 bg-purple-600 opacity-30 blur-2xl"></div>
      <div className="absolute bottom-40 right-0 w-40 h-20 bg-purple-600 opacity-30 blur-2xl"></div>
      <div className="absolute bottom-20 left-0 w-40 h-20 bg-purple-600 opacity-30 blur-2xl"></div>
      <div className="w-full max-w-sm md:max-w-3xl">
        <LoginForm />
      </div>
    </div>
  )
}
