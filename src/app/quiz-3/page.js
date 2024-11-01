"use client"
import QuizSlider from "@/components/quizSlider";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function Quiz3() {
  const router = useRouter();
  return (
    <div className="flex flex-col items-center min-h-screen">
      <Image src="/assets/logo-nutriai.png" onClick={() => router.push("/")} className="mb-10 mt-10 cursor-pointer" alt="Logo" width={150} height={150} />
      <QuizSlider title="Qual seu peso atual (aproximado)? 🏋️" route={"/quiz-4"} measure={"kg"} />
    </div>
  );
}
