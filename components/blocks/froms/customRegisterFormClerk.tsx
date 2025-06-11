"use client"

import { Button } from "@/components/ui/button"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { registerFormSchema } from "@/schemas"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"



export function ProfileForm() {
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
  function onSubmit(values: z.infer<typeof registerFormSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values)
  }

  return(
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


            <Button className="w-full cursor-pointer" type="submit">Submit</Button>
        </form>
    </Form>
  )
  
}