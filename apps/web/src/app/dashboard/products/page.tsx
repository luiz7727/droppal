import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import amazonIcon from "@/assets/amazon_icon.png";
import mlIcon from "@/assets/mercadolivre_icon.png";
import blackTShirt from "@/assets/black_t-shirt.png";
import dunk from "@/assets/dunk.png";
import orangeTShirt from "@/assets/orange_t_shirt.png";
import travisDunk from "@/assets/travis_dunk.png";
import whiteSneaker from "@/assets/white_sneaker.png";
import Image from "next/image";

export default function Products() {

  return (
    <main className="p-4 space-y-4">
      
      <Card>
        <CardHeader>
          <CardTitle>AJ1 - SpiderVerse</CardTitle>
          <CardDescription>Sold: {Math.floor(Math.random() * 100)}</CardDescription>
        </CardHeader>
        <CardContent>
          <Image width={100} height={100} src={travisDunk} alt="" />
        </CardContent>
        <CardFooter>
          <Image width={40} height={50} src={amazonIcon} alt="Amazon Icon"/>
        </CardFooter>
      </Card>
      
      <Card>
        <CardHeader>
          <CardTitle>AJ4 - Military W...</CardTitle>
          <CardDescription>Sold: {Math.floor(Math.random() * 100)}</CardDescription>
        </CardHeader>
        <CardContent>
          <Image width={100} height={100} src={whiteSneaker} alt="" />
        </CardContent>
        <CardFooter>
          <Image width={40} height={50} src={mlIcon} alt="Mercado Livre Icon"/>
        </CardFooter>
      </Card>
      
      <Card>
        <CardHeader>
          <CardTitle>Fitted T-Shirt - Ora...</CardTitle>
          <CardDescription>Sold: {Math.floor(Math.random() * 100)}</CardDescription>
        </CardHeader>
        <CardContent>
          <Image width={100} height={100} src={orangeTShirt} alt="" />
        </CardContent>
        <CardFooter>
          <Image width={40} height={50} src={amazonIcon} alt="Amazon Icon"/>
        </CardFooter>
      </Card>
      
      <Card>
        <CardHeader>
          <CardTitle>AJ1 KIDS - Retro ... </CardTitle>
          <CardDescription>Sold: {Math.floor(Math.random() * 100)}</CardDescription>
        </CardHeader>
        <CardContent>
          <Image width={100} height={100} src={dunk} alt="" />
        </CardContent>
        <CardFooter>
          <Image width={40} height={50} src={mlIcon} alt="Mercado Livre Icon"/>
        </CardFooter>
      </Card>
      
      <Card>
        <CardHeader>
          <CardTitle>Fitted T-Shirt - Bla...</CardTitle>
          <CardDescription>Sold: {Math.floor(Math.random() * 100)}</CardDescription>
        </CardHeader>
        <CardContent>
          <Image width={100} height={100} src={blackTShirt} alt="" />
        </CardContent>
        <CardFooter>
          <Image width={40} height={50} src={amazonIcon} alt="Amazon Icon"/>
        </CardFooter>
      </Card>
    </main>
  )
}