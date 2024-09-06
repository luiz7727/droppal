'use client'

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { loginSchema, type loginFormType } from "@/schemas/login.schema"
import { zodResolver } from "@hookform/resolvers/zod"
import { Loader2 } from "lucide-react"
import Link from "next/link"
import { useForm } from "react-hook-form"

export default function Home() {

  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<loginFormType>({
    resolver: zodResolver(loginSchema)
  });

  async function onSubmit(data: loginFormType) {

  }


  return (
    <main className="w-full h-screen flex items-center justify-center">
      <Card className="w-full max-w-sm">
        <CardHeader>
          <CardTitle className="text-2xl">Welcome to DropPal</CardTitle>
          <CardDescription>
            Enter your email below to login to your account.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form className="grid gap-4" onSubmit={handleSubmit(onSubmit)}>
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input 
                id="email"
                type="email"
                placeholder="m@example.com"
                autoComplete="off"
                required
                {...register('email')}
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="password">Password</Label>
              <Input 
                id="password"
                type="password"
                autoComplete="off"
                required
                {...register('password')}
              />
            </div>
            <Button className="w-full">
              {
                isSubmitting ? <Loader2 className="animate-spin w-5 h-5"/> : 'Sign in'
              }
            </Button>
          </form>
        </CardContent>
        <CardFooter className="justify-center">
          <Link href={'/sign-up'}>Don't have a account ? Click here</Link>
        </CardFooter>
      </Card>
    </main>
  )
}
