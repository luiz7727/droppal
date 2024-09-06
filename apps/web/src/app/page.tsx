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
import { useToast } from "@/hooks/use-toast"
import login from "@/http/auth/login"
import { loginSchema, type loginFormType } from "@/schemas/login.schema"
import { zodResolver } from "@hookform/resolvers/zod"
import { Loader2 } from "lucide-react"
import Link from "next/link"
import { useForm } from "react-hook-form"
import { setCookie } from "nookies";
import { useRouter } from "next/navigation"

export default function Home() {

  const { toast } = useToast();
  const { push } = useRouter();
  const { register, handleSubmit, formState: { isSubmitting } } = useForm<loginFormType>({
    resolver: zodResolver(loginSchema)
  });

  async function onSubmit(data: loginFormType) {
    const { data:response, status } = await login(data);

    if(status === 201) {
      setCookie(null, 'droppal-token', response, {
        maxAge: 30 * 24 * 60 * 60,
        path: '/',
      });
      push('/dashboard');
    }
    else {
      toast({
        title: "Invalid Credentials",
        description: "Check your credentials",
      });
    }
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
                {...register('email')}
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="password">Password</Label>
              <Input 
                id="password"
                type="text"
                autoComplete="off"
                placeholder="********"
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
