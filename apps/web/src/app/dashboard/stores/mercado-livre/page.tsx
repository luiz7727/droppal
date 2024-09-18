'use client'

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import getItemsMercadoLivre, { type ItemResponse } from "@/utils/mercado-livre/get-items";
import { useEffect, useState } from "react";

export default async function MercadoLivre() {

  const [items,setItems] = useState<ItemResponse[]>([]);

  useEffect(() => {
    getItemsMercadoLivre()
    .then((data) => {
      setItems(data);
    })
  },[]);

  return (
    <main className="p-4 space-y-4">
      {
        items.map(({ title, available_quantity, price }) => {
          return (
            <Card>
              <CardHeader>
                <CardTitle>{title}</CardTitle>
                <CardDescription>Qnt: {available_quantity}</CardDescription>
              </CardHeader>
              <CardContent>
               {price.toLocaleString('pt-BR',{
                 style: 'currency',
                 currency: 'USD'
               })}
              </CardContent>
              <CardFooter>
                <Sheet>
                  <SheetTrigger>Update</SheetTrigger>
                  <SheetContent>
                    <SheetHeader>
                      <SheetTitle>Are you absolutely sure?</SheetTitle>
                      <SheetDescription>
                        This action cannot be undone. This will permanently delete your account
                        and remove your data from our servers.
                      </SheetDescription>
                    </SheetHeader>

                    <form>

                    </form>
                  </SheetContent>
                </Sheet>
              </CardFooter>
            </Card>
          )
        })
      }
    </main>
  )
}