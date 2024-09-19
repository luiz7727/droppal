'use client'

import { ThemeProvider } from "@/components/theme-provider";

import { ReactNode } from "react"
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

type ProviderProps = {
  children: ReactNode;
}

const queryClient = new QueryClient();

export default function Provider({ children }: ProviderProps) {
  return (
    <ThemeProvider attribute="class" defaultTheme="dark">
      <QueryClientProvider client={queryClient}>
        {children}
      </QueryClientProvider>
    </ThemeProvider>
  )
}