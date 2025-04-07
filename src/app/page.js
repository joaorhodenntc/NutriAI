"use client";

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ChevronRight, Salad, Utensils, Heart } from "lucide-react"
import { useRouter } from "next/navigation"

export default function Home() {
  const router = useRouter();

  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-white flex justify-center">
        <div className="container flex h-16 items-center justify-between px-4">
          <div className="flex items-center gap-2">
            <Salad className="h-6 w-6 text-[#c7ccc3]" />
            <span className="text-xl font-bold">NutriAI</span>
          </div>
          <nav className="hidden md:flex gap-6">
            <Link href="#como-funciona" className="text-sm font-medium hover:text-[#e44141] transition-colors">
              Como Funciona
            </Link>
            <Link href="#beneficios" className="text-sm font-medium hover:text-[#e44141] transition-colors">
              Benefícios
            </Link>
          </nav>
          <Button onClick={() => router.push('/quiz')} className="bg-[#e44141] hover:bg-[#c93535] text-white">Começar Agora</Button>
        </div>
      </header>
      <main className="flex-1 flex flex-col items-center">
        <section className="relative py-12 md:py-24 lg:py-32 bg-gradient-to-b from-[#f8f9f8] to-white">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 xl:grid-cols-2">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
                    Planos alimentares personalizados com IA
                  </h1>
                  <p className="max-w-[600px] text-gray-500 md:text-xl">
                    Responda um quiz rápido e receba um plano alimentar adaptado às suas necessidades, preferências e
                    objetivos.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button onClick={() => router.push('/quiz')} className="bg-[#e44141] hover:bg-[#c93535] text-white px-8 py-6 text-lg">
                    Gerar Minha Dieta
                    <ChevronRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <div className="relative h-[350px] w-[350px] md:h-[450px] md:w-[450px] lg:h-[500px] lg:w-[500px]">
                  <Image
                    src="/assets/main2.jpeg"
                    alt="Alimentos saudáveis"
                    fill
                    className="object-cover rounded-full border-8 border-[#c7ccc3]/30"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="como-funciona" className="py-12 md:py-24 lg:py-32 bg-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Como Funciona</h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Três passos simples para obter seu plano alimentar personalizado
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3 lg:gap-12">
              <div className="flex flex-col items-center space-y-4 text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#c7ccc3]/20">
                  <span className="text-2xl font-bold text-[#c7ccc3]">1</span>
                </div>
                <h3 className="text-xl font-bold">Responda o Quiz</h3>
                <p className="text-gray-500">Compartilhe suas preferências, restrições e objetivos alimentares.</p>
              </div>
              <div className="flex flex-col items-center space-y-4 text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#c7ccc3]/20">
                  <span className="text-2xl font-bold text-[#c7ccc3]">2</span>
                </div>
                <h3 className="text-xl font-bold">IA Processa</h3>
                <p className="text-gray-500">
                  Nossa inteligência artificial analisa suas respostas e cria um plano personalizado.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-4 text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#c7ccc3]/20">
                  <span className="text-2xl font-bold text-[#c7ccc3]">3</span>
                </div>
                <h3 className="text-xl font-bold">Receba Seu Plano</h3>
                <p className="text-gray-500">Obtenha um plano alimentar detalhado e adaptado às suas necessidades.</p>
              </div>
            </div>
          </div>
        </section>

        <section id="beneficios" className="py-12 md:py-24 lg:py-32 bg-[#f8f9f8]">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Benefícios</h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Por que escolher o NutriAI para seu plano alimentar
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
              <div className="flex flex-col items-start space-y-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#c7ccc3]/20">
                  <Utensils className="h-5 w-5 text-[#c7ccc3]" />
                </div>
                <h3 className="text-xl font-bold">Personalizado</h3>
                <p className="text-gray-500">
                  Planos adaptados às suas necessidades específicas e preferências alimentares.
                </p>
              </div>
              <div className="flex flex-col items-start space-y-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#c7ccc3]/20">
                  <Heart className="h-5 w-5 text-[#c7ccc3]" />
                </div>
                <h3 className="text-xl font-bold">Saudável</h3>
                <p className="text-gray-500">Dietas balanceadas e nutritivas para melhorar sua saúde e bem-estar.</p>
              </div>
              <div className="flex flex-col items-start space-y-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#c7ccc3]/20">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5 text-[#c7ccc3]"
                  >
                    <circle cx="12" cy="12" r="10" />
                    <polyline points="12 6 12 12 16 14" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold">Rápido</h3>
                <p className="text-gray-500">Obtenha seu plano alimentar em segundos, sem esperas ou consultas.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 md:py-24 lg:py-32 bg-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Pronto para transformar sua alimentação?
                </h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Comece agora e receba seu plano alimentar personalizado em minutos.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button onClick={() => router.push('/quiz')} className="bg-[#e44141] hover:bg-[#c93535] text-white px-8 py-6 text-lg">
                  Gerar Minha Dieta
                  <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="border-t bg-[#f8f9f8]">
        <div className="w-full flex flex-col gap-4 py-10 items-center">
          <div className="flex items-center gap-2">
            <Salad className="h-5 w-5 text-[#c7ccc3]" />
            <span className="text-lg font-semibold">NutriAI</span>
          </div>
          <p className="text-sm text-gray-500">© 2024 NutriAI. Todos os direitos reservados.</p>
          <div className="flex gap-4">
            <Link href="#" className="text-sm text-gray-500 hover:text-[#e44141]">
              Termos
            </Link>
            <Link href="#" className="text-sm text-gray-500 hover:text-[#e44141]">
              Privacidade
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}

