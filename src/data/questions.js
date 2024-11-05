const questions = [
    {
      title: "Qual o seu principal objetivo com essa dieta? 🥗",
      options: [
        { letter: "A", text: "Perda de peso" },
        { letter: "B", text: "Ganhar massa muscular" },
        { letter: "C", text: "Melhorar a saúde geral" },
        { letter: "D", text: "Aumentar a resistência" },
      ],
    },
    {
      title: "Qual é a sua idade?",
      options: [
        { letter: "A", text: "Menos de 18 anos" },
        { letter: "B", text: "18-24 anos" },
        { letter: "C", text: "25-34 anos" },
        { letter: "D", text: "35-44 anos" },
        { letter: "E", text: "45 anos ou mais" },
      ],
    },
    {
      title: "Qual seu peso atual (aproximado)? 🏋️",
      measure: "kg",
      type: "slider",
    },
    {
      title: "Qual sua altura (aproximada)? 📏",
      measure: "cm",
      min: 130,
      max: 210,
      type: "slider",
    },
    {
      title: "Qual o seu nível de atividade física atual? 🏃",
      options: [
        { letter: "A", text: "Sedentário (pouca ou nenhuma atividade física)" },
        { letter: "B", text: "Leve (exercício 1-2 dias por semana)" },
        { letter: "C", text: "Moderado (exercício 3-4 dias por semana)" },
        { letter: "D", text: "Intenso (exercício 5 ou mais dias por semana)" },
        { letter: "E", text: "Atleta profissional" },
      ],
    },
    {
      title: "Qual a sua rotina de trabalho? 💼",
      options: [
        { letter: "A", text: "Predominantemente sedentária (exemplo: escritório)" },
        { letter: "B", text: "Moderada (exemplo: atividades em pé, andando)" },
        { letter: "C", text: "Alta intensidade (exemplo: construção civil)" },
      ],
    },
  ];
  
  export default questions;
  