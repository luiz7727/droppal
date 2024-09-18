'use client'

import { Button } from "@/components/ui/button";
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Store } from "@/types/Store";
import getCodeFromMercadoLivre from "@/utils/mercado-livre/get-code-from-mercado-livre";
import transferCodeToAccessToken from "@/utils/mercado-livre/transfer-code-to-access-token";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useEffect } from "react";

export default function Stores() {

  const searchParams = useSearchParams();
  const mlCode = searchParams.get('code') ?? '';
  const stores:Store[] = [];

  useEffect(() => {
    if(mlCode?.length > 0) {
      transferCodeToAccessToken(mlCode)
      .then(({ access_token, refresh_token, user_id }) => {
        sessionStorage.setItem('ml_access_token', access_token);
        sessionStorage.setItem('ml_refresh_token', refresh_token);
        sessionStorage.setItem('ml_user_id', user_id.toString());
      })
    }
  },[])
  
  return (
    <main className="p-4 space-y-2">

      <Dialog>
        <DialogTrigger className="flex items-end justify-end" asChild>
          <Button>Add Store</Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Add Store</DialogTitle>
            <DialogDescription>
              Select which provider you want to add
            </DialogDescription>
          </DialogHeader>

          <Button 
            disabled={stores.some(({ name }) => name === 'Mercado Livre')}
            >
              <Link href={`https://auth.mercadolivre.com.br/authorization?response_type=code&client_id=${process.env.NEXT_PUBLIC_MERCAD0_LIVRE_APP_ID}&redirect_uri=${process.env.NEXT_PUBLIC_MERCADO_LIVRE_REDIRECT_URI}`}>
                Mercado Livre
              </Link>
          </Button>
          <Button disabled>Amazon - soon</Button>
          <Button disabled>AliExpress - soon</Button>
          
          <DialogFooter>
            <DialogClose>
              <Button>Close</Button>
            </DialogClose>
          </DialogFooter>

        </DialogContent>
      </Dialog>


      {
        stores.map(({ name }, index) => {
          return (
            <Card key={index}>
              <CardHeader>
                <CardTitle>{name}</CardTitle>
              </CardHeader>
              <CardFooter className="gap-x-4">
                <Button asChild>
                  <Link href={`/dashboard/stores/${name}`}>View Store</Link>
                </Button>
                <Button variant={'destructive'}>Turn Off</Button>
              </CardFooter>
            </Card>
          )
        })
      }
    </main>
  )
}