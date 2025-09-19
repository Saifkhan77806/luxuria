'use client'
import React, { useState } from 'react'
import { useSignIn } from '@clerk/nextjs'
import type { NextPage } from 'next'
import { Button } from '@/components/ui/button'
import { toast } from 'sonner'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { InputOTP, InputOTPGroup, InputOTPSlot } from '@/components/ui/input-otp'
import { number, z } from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { Input } from '@/components/ui/input'
import { useRouter } from 'next/navigation'

const ForgotPasswordPage: NextPage = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [code, setCode] = useState('')
  const [successfulCreation, setSuccessfulCreation] = useState(false)
  const [secondFactor, setSecondFactor] = useState(false)
  const [error, setError] = useState('')

  const { isLoaded, signIn, setActive } = useSignIn()

  if (!isLoaded) {
    return null
  }

  const router = useRouter()

  const FormSchema = z.object({
    password: z.string().min(6, {
      message: "Your password must be with 6 Numbers.",
    }),
     code: z.string().min(6, {
      message: "Your password OTP must be with 6 Numbers.",
    }),
  })

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      password: "",
      code: ""
    },
  })

  // Send the password reset code to the user's email
  async function create(e: React.FormEvent) {
    e.preventDefault()
    await signIn
      ?.create({
        strategy: 'reset_password_email_code',
        identifier: email,
      })
      .then((_) => {
        setSuccessfulCreation(true)
        setError('')
      })
      .catch((err) => {
        toast(err.errors[0].longMessage)
      })
  }

  // Reset the user's password.
  // Upon successful reset, the user will be
  // signed in and redirected to the home page
  async function reset(e: React.FormEvent) {
    e.preventDefault()
    await signIn
      ?.attemptFirstFactor({
        strategy: 'reset_password_email_code',
        code,
        password,
      })
      .then((result) => {
        // Check if 2FA is required
        if (result.status === 'needs_second_factor') {
          setSecondFactor(true)
        } else if (result.status === 'complete') {
          // Set the active session to
          // the newly created session (user is now signed in)
          setActive({ session: result.createdSessionId })
          router.push("/dashboard")
        } else {
          console.log(result)
        }
      })
      .catch((err) => {
        console.error('error', err.errors[0].longMessage)
        toast(err.errors[0].longMessage)
      })
  }

  async function onSubmit(data: z.infer<typeof FormSchema>) {
    toast("You submitted the following values", {
      description: (
        <pre className="mt-2 w-[320px] rounded-md bg-neutral-950 p-4">
          <code className="text-white">{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
    })

    await signIn
      ?.attemptFirstFactor({
        strategy: 'reset_password_email_code',
        code: data.code,
        password: data.password,
      })
      .then((result) => {
        // Check if 2FA is required
        if (result.status === 'needs_second_factor') {
          setSecondFactor(true)
        } else if (result.status === 'complete') {
          // Set the active session to
          // the newly created session (user is now signed in)
          setActive({ session: result.createdSessionId })
          
        } else {
          console.log(result)
        }
      })
      .catch((err) => {
        console.error('error', err.errors[0].longMessage)
        toast(err.errors[0].longMessage)
      })
  }

  return (
    <div className='min-h-screen w-full  flex justify-center items-center'>
      <div className='w-2/5 mx-auto'>
        <h1 className='text-3xl text-gray-700 font-bold'>Forgot Password?</h1>
        <p className='text-gray-400 font-sans'>Do You Want To Change Password.</p>
        <form className='flex flex-col my-6' onSubmit={create}>
          {!successfulCreation && (
            <>
              <label htmlFor="email" className='font-sans text-black font-semibold'>Provide your email address</label>
              <input
                type="email"
                className='p-3 mb-2 rounded-sm border-[1px] font-sans border-gray-300'
                placeholder="e.g john@doe.com"
                id='email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />

              <Button className='cursor-pointer'>Send password reset code</Button>
              {error && <p>{error}</p>}
            </>
          )}
        </form>

        {successfulCreation && (
          <>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="w-2/3 space-y-6">

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


                <FormField
                  control={form.control}
                  name="code"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>One-Time Password</FormLabel>
                      <FormControl>
                        <InputOTP maxLength={6} {...field}>
                          <InputOTPGroup>
                            <InputOTPSlot index={0} />
                            <InputOTPSlot index={1} />
                            <InputOTPSlot index={2} />
                            <InputOTPSlot index={3} />
                            <InputOTPSlot index={4} />
                            <InputOTPSlot index={5} />
                          </InputOTPGroup>
                        </InputOTP>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button type="submit">Submit</Button>
              </form>
            </Form>
            {error && <p>{error}</p>}
          </>
        )}

        {secondFactor && <p>2FA is required, but this UI does not handle that</p>}
      </div>
    </div>
  )
}

export default ForgotPasswordPage