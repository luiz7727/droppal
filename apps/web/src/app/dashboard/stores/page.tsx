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
import getStoresFromUser from "@/utils/store/get-stores-from-user";
import Link from "next/link";

export default async function Stores() {

  const stores:Store[] = await getStoresFromUser();
  
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
            disabled={stores.some(({ type }) => type === 'Mercado Livre')}
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
        stores.map(({ type }, index) => {
          return (
            <Card key={index}>
              <CardHeader>
                <CardTitle>{type}</CardTitle>
              </CardHeader>
              <CardFooter className="gap-x-4">
                <Button asChild>
                  <Link href={`/dashboard/stores/${type}`}>View Store</Link>
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