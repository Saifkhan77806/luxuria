"use client"

import { Button } from "@/components/ui/button"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { loginFormSchema } from "@/schemas"
import { useSignIn } from "@clerk/nextjs"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { toast } from "sonner"
import { z } from "zod"



export function CustomLoginFormClerk() {

  const { signIn, isLoaded, setActive } = useSignIn();


  // 1. Define your form.
  const form = useForm<z.infer<typeof loginFormSchema>>({
    resolver: zodResolver(loginFormSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  })

  // 2. Define a submit handler.
  async function onSubmit(values: z.infer<typeof loginFormSchema>) {

    const { email, password } = values;

    if (!isLoaded) return;

    try {
      const result = await signIn.create({
        identifier: email,
        password,
      });

      if (result.status === 'complete') {
        await setActive({ session: result.createdSessionId });
        window.location.href = '/dashboard'; // Redirect after login
      }
    } catch (err: any) {
      if (err.errors?.[0]?.code === 'form_password_incorrect') {
        alert('Invalid credentials');
      } else if (err.errors?.[0]?.code === 'form_identifier_not_found') {
        alert('User not found');
      } else if (err.errors?.[0]?.message.includes('no password set')) {
        alert('User registered with social login. Set a password to use credentials.');
      } else {
        alert('Login failed. Check your credentials.');
      }
    }

    console.log(values)
  }







  return (
    <>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name="email"
            render={
              ({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input placeholder="customer@luxuria.com" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )
            }
          />

          <FormField
            control={form.control}
            name="password"
            render={
              ({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input placeholder="********" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )
            }
          />


          <Button className="w-full cursor-pointer" type="submit">Submit</Button>
        </form>
      </Form>

      <div>
      </div>

    </>
  )

}