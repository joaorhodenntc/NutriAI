"use client"
import QuizSlider from "@/components/quizSlider";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function Quiz3() {
  const router = useRouter();
  return (
    <div className="flex flex-col items-center min-h-screen">
      <Image src="/assets/logo-nutriai.png" onClick={() => router.push("/")} className="mb-10 mt-10 cursor-pointer" alt="Logo" width={150} height={150} />
      <QuizSlider title="Qual sua altura (aproximada)? 📏" route={"/quiz-5"} min={130}  max={210} measure={"cm"}/>
    </div>
  );
}



