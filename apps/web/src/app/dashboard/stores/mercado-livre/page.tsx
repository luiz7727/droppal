'use client'

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { updateItemSchema, type updateItemFormType } from "@/schemas/update-item";
import getItemsMercadoLivre, { ItemResponse } from "@/utils/mercado-livre/get-items";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useForm } from "react-hook-form";

export default function MercadoLivre() {

  const { data:items=[] } = useQuery({ queryKey: ['items'], queryFn: getItemsMercadoLivre })
  
  const queryClient = useQueryClient();
  const { register, handleSubmit, getValues } = useForm<updateItemFormType>({
    resolver: zodResolver(updateItemSchema),
    defaultValues: {
      title: '',
      price: 0,
      available_quantity:100
    }
  });

  const { mutateAsync } = useMutation({
    mutationFn: async (data:updateItemFormType) => {},
    onSuccess: (_,variables) => {
      // Invalidate and refetch
      // queryClient.invalidateQueries({ queryKey: ['todos'] })
      
      queryClient.setQueryData(['items'], (data:ItemResponse[]) => {
        return [...data, {
          title: variables.title,
          price: variables.price,
          available_quantity: variables.available_quantity,
        }]
      });
    },
  });

  async function updateItem(title:string) {
    // queryClient.getQueryData()
    const item = items.find(({ title }) => title !== title)!;
    item.title = getValues('title');
    item.price = getValues('price');
    item.available_quantity = getValues('available_quantity');
    // const newData = {
    //   title: ,
    //   price: getValues('price'),
    //   available_quantity: getValues('available_quantity')
    // }
    // queryClient.set
    // queryClient.setQueryData(['items'], );
  }
  
  async function deleteItem(title:string) {
    const newArray = items.filter((item) => item.title !== title);
    queryClient.setQueryData(['items'], newArray);
  }

  async function onSubmit(data:updateItemFormType) {
    // mutateAsync(data);
  }

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
                      <SheetTitle>Update Item</SheetTitle>
                      <SheetDescription>
                        This action cannot be undone. This will permanently delete your account
                        and remove your data from our servers.
                      </SheetDescription>
                    </SheetHeader>
                    <form onSubmit={handleSubmit(onSubmit)}>
                      <Label>Title</Label>
                      <Input {...register('title')}/>
                      <Label>Price</Label>
                      <Input {...register('price', { valueAsNumber:true })}/>
                      <Label>Available Quantity</Label>
                      <Input {...register('available_quantity', { valueAsNumber:true })}/>
                      <Button type="button" className="w-full" onClick={() => updateItem(title)}>update</Button>
                    </form>
                  </SheetContent>
                </Sheet>

                <Button onClick={() => deleteItem(title)}>delete</Button>
              </CardFooter>
            </Card>
          )
        })
      }
    </main>
  )
}