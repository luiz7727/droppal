'use client'

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import createUser from "@/http/user/create-user";
import { signUpSchema, signUpFormType } from "@/schemas/sign-up-schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2 } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { setCookie } from "nookies";
export default function SignUp() {

  const { toast } = useToast();
  const { push } = useRouter();

  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<signUpFormType>({
    resolver: zodResolver(signUpSchema)
  });

  async function onSubmit(data: signUpFormType) {
    const { code, message } = await createUser(data);

    if(code === 201) {
      setCookie(null, 'droppal-token', message, {
        maxAge: 30 * 24 * 60 * 60,
        path: '/',
      });
      push('/dashboard');
    }
    else {
      toast({
        title: message,
        description: 'Check your credentials',
      })
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
              <Label htmlFor="name">Name</Label>
              <Input 
                id="name"
                type="text"
                placeholder="Jhon Doe"
                autoComplete="off"
                {...register('name')}
              />
            </div>
            {
              errors && errors.name && <p className="text-red-600">{errors.name.message}</p>
            }

            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input 
                id="email"
                type="email"
                autoComplete="off"
                placeholder="johndoe@gmail.com"
                {...register('email')}
              />
            </div>
            {
              errors && errors.email && <p className="text-red-600">{errors.email.message}</p>
            }
            
            <div className="grid gap-2">
              <Label htmlFor="telephone">Telephone</Label>
              <Input 
                id="telephone"
                type="text"
                autoComplete="off"
                placeholder=""
                {...register('telephone')}
              />
            </div>

            {
              errors && errors.telephone && <p className="text-red-600">{errors.telephone.message}</p>
            }
            
            <div className="grid gap-2">
              <Label htmlFor="username">Username</Label>
              <Input 
                id="username"
                type="text"
                autoComplete="off"
                placeholder=""
                {...register('username')}
              />
            </div>

            {
              errors && errors.username && <p className="text-red-600">{errors.username.message}</p>
            }
            
            <div className="grid gap-2">
              <Label htmlFor="password">Password</Label>
              <Input 
                id="password"
                type="text"
                autoComplete="off"
                placeholder="****************"
                {...register('password')}
              />
            </div>

            {
              errors && errors.password && <p className="text-red-600">{errors.password.message}</p>
            }
            <Button className="w-full" type="submit">
              {
                isSubmitting ? <Loader2 className="animate-spin w-5 h-5"/> : 'Sign Up'
              }
            </Button>
          </form>
        </CardContent>
        <CardFooter className="justify-center">
          <Link href={'/'}>Already have a account ? Click here</Link>
        </CardFooter>
      </Card>
    </main>
  )
}
