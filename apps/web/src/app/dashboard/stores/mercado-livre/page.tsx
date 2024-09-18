import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import mlIcon from "@/assets/mercadolivre_icon.png";

export default function MercadoLivre() {
  
  const products = [];

  return (
    <main className="p-4 space-y-4">
      
      <Card>
        <CardHeader>
          <CardTitle>Memoria Servidor a16 Gg Ddr4 Dell R330 R340 T330 T340</CardTitle>
          <CardDescription>Total Sold: {Math.floor(Math.random() * 100)}</CardDescription>
        </CardHeader>
        <CardContent>
          <img className="w-100 h-100" src={'https://http2.mlstatic.com/D_NQ_NP_758633-MLU77134543390_062024-O.webp'} alt="" />
        </CardContent>
        <CardFooter>
          <Image width={40} height={50} src={mlIcon} alt="Mercado Livre Icon"/>
        </CardFooter>
      </Card>
      
      <Card>
        <CardHeader>
          <CardTitle>Cadeira De Escritório Secretária Fitz Preta Cor Preto</CardTitle>
          <CardDescription>Total Sold: {Math.floor(Math.random() * 100)}</CardDescription>
        </CardHeader>
        <CardContent>
          <img width={160} height={160} src={'https://http2.mlstatic.com/D_NQ_NP_720155-MLU73037080668_112023-F.webp'} alt="" />
        </CardContent>
        <CardFooter>
          <Image width={40} height={50} src={mlIcon} alt="Mercado Livre Icon"/>
        </CardFooter>
      </Card>
      
      <Card>
        <CardHeader>
          <CardTitle>Console PlayStation 5 Digital Slim Branco 1TB Returnal e Ratchet e Clank Controle Sem Fio Dualsense Branco</CardTitle>
          <CardDescription>Total Sold: {Math.floor(Math.random() * 100)}</CardDescription>
        </CardHeader>
        <CardContent>
          <img className="w-100 h-100" src={'https://http2.mlstatic.com/D_NQ_NP_808184-MLA76839832205_062024-O.webp'} alt="" />
        </CardContent>
        <CardFooter>
          <Image width={40} height={50} src={mlIcon} alt="Mercado Livre Icon"/>
        </CardFooter>
      </Card>
      
      <Card>
        <CardHeader>
          <CardTitle>Computador Completo H61 Intel Core I5 16gb Ssd 120gb</CardTitle>
          <CardDescription>Total Sold: {Math.floor(Math.random() * 100)}</CardDescription>
        </CardHeader>
        <CardContent>
          <img className="w-100 h-100" src={'https://http2.mlstatic.com/D_NQ_NP_676419-MLU78639486052_092024-O.webp'} alt="" />
        </CardContent>
        <CardFooter>
          <Image width={40} height={50} src={mlIcon} alt="Mercado Livre Icon"/>
        </CardFooter>
      </Card>
      
      <Card>
        <CardHeader>
          <CardTitle>Nintendo Nintendo Switch Switch 32GB Standard cor vermelho-néon, azul-néon e preto</CardTitle>
          <CardDescription>Total Sold: {Math.floor(Math.random() * 100)}</CardDescription>
        </CardHeader>
        <CardContent>
          <img className="w-100 h-100" src={'https://http2.mlstatic.com/D_NQ_NP_603227-MLA76707588495_052024-O.webp'} alt="" />
        </CardContent>
        <CardFooter>
          <Image width={40} height={50} src={mlIcon} alt="Amazon Icon"/>
        </CardFooter>
      </Card>
    </main>
  )
}