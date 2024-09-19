
export interface ItemResponse {
  title:string
  available_quantity:number,
  price:number
}
export default async function getItemsMercadoLivre(): Promise<ItemResponse[]> {
  return [
    {
      title: 'Console Xbox One 500gb + Headset Com Fio + Controle Wireless',
      available_quantity: 100,
      price: 2340
    },
    {
      title: 'Apple iPhone 15 (256 Gb) - Preto',
      available_quantity: 68,
      price: 10000
    },
  ];
}