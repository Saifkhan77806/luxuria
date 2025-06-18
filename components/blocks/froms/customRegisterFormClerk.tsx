"use client"

import { Button } from "@/components/ui/button"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { registerFormSchema } from "@/schemas"
import { useSignUp } from "@clerk/nextjs"
import { zodResolver } from "@hookform/resolvers/zod"
import { useRouter } from "next/navigation"
import { useState, useTransition } from "react"
import { useForm } from "react-hook-form"
import { toast } from "sonner"
import { z } from "zod"



export function ProfileForm() {

    const { signUp, setActive } = useSignUp();
    const router = useRouter();
    const [code, setCode] = useState<string>("");
    const [pendingVerification, setPendingVerification] = useState(false);
    const [isPending, startTransition] = useTransition()


  // 1. Define your form.
  const form = useForm<z.infer<typeof registerFormSchema>>({
    resolver: zodResolver(registerFormSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
    },
  })

  // 2. Define a submit handler.
  async function onSubmit(values: z.infer<typeof registerFormSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.

    console.log("Submitting form with values:", values);

    const { firstName, lastName, email, password } = values;
    if(!signUp) return;

    try{
        await signUp.create({
      emailAddress: email,
      password,
    });


        await signUp.prepareEmailAddressVerification({ strategy: 'email_code' });
        setPendingVerification(true);

    }catch(e: unknown){
        console.error("Error submitting form:", e instanceof Error ? e.message : "Unknown error")
        toast.error(e instanceof Error ? e.message : "Please try again later.");
    }
    console.log({ firstName, lastName, email, password })
  }

   const handleVerification = async () => {
  if (!signUp || !setActive) return;

  try {
    // ✅ Check if already verified
    console.log("Attempting to verify code:", code);
    const result = await signUp.attemptEmailAddressVerification({ code });

    console.log("Verification result:", result);


    if (result.status === "complete") {
      await setActive({ session: result.createdSessionId });

      startTransition(() => {
         fetch('/api/create-user', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email: result.emailAddress, profileUrl: "https://img.clerk.com/eyJ0eXBlIjoiZGVmYXVsdCIsImlpZCI6Imluc18yeUljRDQ2R0tVSWd0Rjh2aHpjZ2drMFZGZHAiLCJyaWQiOiJ1c2VyXzJ5UUp2SmVBUUJMTnVHdE1GZTdzbnJHS29EWiJ9?width=64" }),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.success) {
            console.log('User created');
            router.push('/dashboard')
          }})
      })
      
      

    }
  } catch (e: unknown) {
    const message = e instanceof Error ? e.message : "Verification failed.";
    toast.error(message);
  }
};





  return(
    <>
    <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <FormField
            control={form.control}
            name="firstName"
            render={
                ({ field }) => (
                    <FormItem>
                        <FormLabel>First name</FormLabel>
                        <FormControl>
                            <Input placeholder="first name" {...field} />
                        </FormControl>
                        <FormMessage />
                    </FormItem>
                )
            }
            />

            <FormField
            control={form.control}
            name="lastName"
            render={
                ({ field }) => (
                    <FormItem>
                        <FormLabel>First name</FormLabel>
                        <FormControl>
                            <Input placeholder="last name" {...field} />
                        </FormControl>
                        <FormMessage />
                    </FormItem>
                )
            }
            />

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


            <Button className="w-full cursor-pointer" disabled={isPending} type="submit">Submit</Button>
        </form>
    </Form>

<div>
    {
        pendingVerification && (<><input

            type="text"
            placeholder="Verification Code"
            className="w-full border p-2 rounded"
            onChange={(e) => setCode(e.target.value)}
          />
          <Button
            onClick={handleVerification}
            className="text-white px-4 py-2 rounded w-full" 
            disabled={isPending} 
          >
            Verify & Continue
          </Button> </>)
    }
</div>

    </>
  )
  
}