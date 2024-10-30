"use client"
import Option from "@/components/option";
import Quiz from "@/components/quiz";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  return (
    <div className="flex justify-center items-center min-h-screen">
      <button onClick={() => router.push("/quiz-1")}>Iniciar Teste</button>
    </div>
  );
}
