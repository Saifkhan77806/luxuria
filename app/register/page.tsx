import { ResgisterForm } from "@/components/regsiter-form";


export default function LoginPage() {
  return (
    <div className="bg-black relative flex min-h-svh flex-col items-center justify-center p-6 md:p-10 ">
      <div className="absolute top-20 left-0 w-40 h-20 bg-purple-600 opacity-30 blur-2xl"></div>
      <div className="absolute bottom-40 right-0 w-40 h-20 bg-purple-600 opacity-30 blur-2xl"></div>
      <div className="absolute bottom-20 left-0 w-40 h-20 bg-purple-600 opacity-30 blur-2xl"></div>
      <div className="w-full max-w-sm md:max-w-3xl">
        <ResgisterForm />
      </div>
    </div>
  )
}
