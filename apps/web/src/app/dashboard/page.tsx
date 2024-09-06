'use client'
import {
  Activity,
  CreditCard,
  DollarSign,
  Users,
} from "lucide-react";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

import { Bar, BarChart, CartesianGrid, XAxis } from "recharts";
import { ChartConfig, ChartContainer } from "@/components/ui/chart"
import amazonIcon from "@/assets/amazon_icon.png";
import travisDunk from "@/assets/travis_dunk.png";
import Image from "next/image";

export default function Dashboard() {

  const chartData = [
    { month: "January", price: Math.floor(Math.random() * 100) },
    { month: "February", price: Math.floor(Math.random() * 100) },
    { month: "March", price: Math.floor(Math.random() * 100)},
    { month: "April", price: Math.floor(Math.random() * 100) },
    { month: "May", price: Math.floor(Math.random() * 100) },
    { month: "June", price: Math.floor(Math.random() * 100)},
    { month: "July", price: Math.floor(Math.random() * 100)},
    { month: "August", price: Math.floor(Math.random() * 100)},
    { month: "September", price: Math.floor(Math.random() * 100)},
    { month: "October", price: Math.floor(Math.random() * 100) },
    { month: "November", price: Math.floor(Math.random() * 100) },
    { month: "December", price: Math.floor(Math.random() * 100) },
  ];


  const chartConfig = {
    price: {
      label: 'price',
      color: "#2563eb",
    }
  } satisfies ChartConfig;

  return (
    <div className="flex min-h-screen w-full flex-col">
      <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-8">
        <div className="grid gap-4 md:grid-cols-2 md:gap-8 lg:grid-cols-4">
          <Card x-chunk="dashboard-01-chunk-0">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                This month Revenue
              </CardTitle>
              <DollarSign className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">$45,231.89</div>
              <p className="text-xs text-muted-foreground">
                +20.1% from last month
              </p>
            </CardContent>
          </Card>
          <Card x-chunk="dashboard-01-chunk-1">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Subscriptions
              </CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">+2350</div>
              <p className="text-xs text-muted-foreground">
                +180.1% from last month
              </p>
            </CardContent>
          </Card>
          <Card x-chunk="dashboard-01-chunk-2">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Sales</CardTitle>
              <CreditCard className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">+12,234</div>
              <p className="text-xs text-muted-foreground">
                +19% from last month
              </p>
            </CardContent>
          </Card>
          <Card x-chunk="dashboard-01-chunk-3">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Active Now</CardTitle>
              <Activity className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">+573</div>
              <p className="text-xs text-muted-foreground">
                +201 since last hour
              </p>
            </CardContent>
          </Card>
        </div>
        <div className="grid gap-4 md:gap-8 lg:grid-cols-2 xl:grid-cols-3">
          <Card
            className="xl:col-span-2" x-chunk="dashboard-01-chunk-4"
          >
            <CardHeader className="flex flex-row items-center">
              <div className="grid gap-2">
                <CardTitle>Sales</CardTitle>
                <CardDescription>
                  This Year Sales vs Last year's.
                </CardDescription>
              </div>
            </CardHeader>
            <CardContent>
            <ChartContainer config={chartConfig} className="h-[200px] w-full">
              <BarChart accessibilityLayer data={chartData}>
                <CartesianGrid vertical={false} />
                <XAxis
                  dataKey="month"
                  tickLine={false}
                  tickMargin={10}
                  axisLine={false}
                  tickFormatter={(value) => value.slice(0, 3)}
                />
                <Bar dataKey="price" fill="#4CAF50" radius={4} />
                <Bar dataKey="price" fill="#4CAF50" radius={4} />
              </BarChart>
            </ChartContainer>
            </CardContent>
          </Card>
          <Card x-chunk="dashboard-01-chunk-5">
            <CardHeader>
              <CardTitle>Most Sold Item</CardTitle>
              <CardDescription>250 pieces</CardDescription>
            </CardHeader>
            <CardContent className="grid gap-8">
              <Image width={1000} height={1000} src={travisDunk} alt=""/>
            </CardContent>
            <CardFooter>
              <Image width={40} height={40} src={amazonIcon} alt=""/>
            </CardFooter>
          </Card>
        </div>
      </main>
    </div>
  )
}
