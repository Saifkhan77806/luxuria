import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { ProfileForm } from "@/components/blocks/froms/customRegisterFormClerk"
import { toast } from "sonner"
import { useSignUp } from "@clerk/nextjs"
import Link from "next/link"

export function ResgisterForm({
  className,
  ...props
}: React.ComponentProps<"div">) {

   const { isLoaded, signUp } = useSignUp();
 
  const handleSocialRegister = async (provider: 'oauth_google' | 'oauth_linkedin') => {
  if (!isLoaded) return;

  try {
    await signUp.authenticateWithRedirect({
      strategy: provider,
      redirectUrl: '/auth/callback',
      redirectUrlComplete: '/auth/callback',
    });
  } catch (e: unknown) {
    toast.error( e instanceof Error ? e.message : "Please try again later.");
  }
};

  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Card>
        <CardHeader className="text-center">
          <CardTitle className="text-xl">
            Welcome to Luxuria AI
          </CardTitle>
          <CardDescription>
            Register to your account to continue using Luxuria AI.
          </CardDescription>
        </CardHeader>
        <CardContent>
            <div className="grid gap-6">
              <div>
                <Button variant="outline" onClick={() => handleSocialRegister('oauth_google')} className="w-full">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path
                      d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z"
                      fill="currentColor"
                    />
                  </svg>
                  Login with Google
                </Button>
              </div>
              <div className="after:border-border relative text-center text-sm after:absolute after:inset-0 after:top-1/2 after:z-0 after:flex after:items-center after:border-t">
                <span className="bg-card text-muted-foreground relative z-10 px-2">
                  Or continue with
                </span>
              </div>
              <div>
                <ProfileForm />
              </div>
              <div className="text-center text-sm">
                Already have an account?{" "}
                <Link
                  href="/login"
                  className="hover:underline"
                >
                  Login
                </Link>
              </div>
            </div>
        </CardContent>
      </Card>
      <div className="text-muted-foreground *:[a]:hover:text-primary text-center text-xs text-balance *:[a]:underline *:[a]:underline-offset-4">
        By clicking continue, you agree to our <a href="#">Terms of Service</a>{" "}
        and <a href="#">Privacy Policy</a>.
      </div>
    </div>
  )
}
