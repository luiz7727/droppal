import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Product } from "@/types/Product";
import amazonIcon from "@/assets/amazon_icon.png";
import mlIcon from "@/assets/mercadolivre_icon.png";
import Image from "next/image";

export default function Products() {

  const products: Product[] = [
    {
      name: 'AJ1 - SpiderVerse',
      totalSold: Math.floor(Math.random() * 100),
      store: 'MercadoLivre',
    },
    {
      name: 'AJ4 - Military W...',
      totalSold: Math.floor(Math.random() * 100),
      store: 'MercadoLivre'
    },
    {
      name: 'Fitted T-Shirt - Ora...',
      totalSold: Math.floor(Math.random() * 100),
      store: 'Amazon'
    },
    {
      name: 'AJ1 KIDS - Retro ... ',
      totalSold: Math.floor(Math.random() * 100),
      store: 'MercadoLivre'
    },
    {
      name: 'Fitted T-Shirt - Bla...',
      totalSold: Math.floor(Math.random() * 100),
      store: 'Amazon'
    },
    
  ];

  return (
    <main className="p-4 space-y-4">
      {
        products.map(({ name, totalSold, store }) => {
          return (
            <Card>
              <CardHeader>
                <CardTitle>{name}</CardTitle>
                <CardDescription>Sold: {totalSold}</CardDescription>
              </CardHeader>
              <CardContent>

              </CardContent>
              <CardFooter>
                {
                  store === "Amazon" && (
                    <Image width={40} height={40} src={amazonIcon} alt=""/>
                  )
                }
                
                {
                  store === "MercadoLivre" && (
                    <Image width={40} height={40} src={mlIcon} alt=""/>
                  )
                }
              </CardFooter>
            </Card>
          )
        })
      }
    </main>
  )
}