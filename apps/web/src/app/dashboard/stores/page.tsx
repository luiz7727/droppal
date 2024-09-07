import { Button } from "@/components/ui/button";
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Store } from "@/types/Store";
import Link from "next/link";

export default function Stores() {

  const stores:Store[] = [
    {
      name: 'Mercado Livre',
      invoicing: Math.floor(Math.random() * 100)
    },
    // {
    //   name: 'Amazon',
    //   invoicing: Math.floor(Math.random() * 100)
    // },
    // {
    //   name: 'AliExpress',
    //   invoicing: Math.floor(Math.random() * 100)
    // },
  ];
  
  return (
    <main className="p-4 space-y-2">
      {
        stores.map(({ name, invoicing }, index) => {
          return (
            <Card key={index}>
              <CardHeader>
                <CardTitle>{name}</CardTitle>
                <CardDescription>Invoicing: {invoicing.toLocaleString('en-US',{ style: 'currency',currency: 'USD' })}</CardDescription>
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