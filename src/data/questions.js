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
    title: "Qual é a sua idade? ⏳",
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
    type: "input",
  },
  {
    title: "Qual sua altura (aproximada)? 📏",
    measure: "cm",
    type: "input",
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
  {
    title: "Com que frequência você costuma comer? 🍽️",
    options: [
      { letter: "A", text: "3 refeições principais ao dia" },
      { letter: "B", text: "3 refeições principais + 1 ou 2 lanches" },
      { letter: "C", text: "Refeições menores ao longo do dia (6 ou mais)" },
      { letter: "D", text: "Menos de 3" },
    ],
  },
  {
    title: "Possui alguma preferência alimentar ou restrição? 🍲",
    options: [
      { letter: "A", text: "Vegetariano" },
      { letter: "B", text: "Vegano" },
      { letter: "C", text: "Intolerante à lactose" },
      { letter: "D", text: "Alérgico a glúten" },
      { letter: "E", text: "Diabetes" },
      { letter: "F", text: "Nenhuma restrição" },
    ],
  },
  {
    title: "Há alguma condição de saúde que precise ser considerada? 🩺",
    options: [
      { letter: "A", text: "Hipertensão" },
      { letter: "B", text: "Diabetes" },
      { letter: "C", text: "Problemas digestivos" },
      { letter: "D", text: "Colesterol alto" },
      { letter: "E", text: "Nenhuma" },
    ],
  },
  {
    title: "Qual o seu orçamento mensal para alimentação? 💰",
    options: [
      { letter: "A", text: "Até R$300" },
      { letter: "B", text: "R$300-R$500" },
      { letter: "C", text: "R$500-R$800" },
      { letter: "D", text: "Acima de R$800" },
    ],
  },
  {
    title: "Quanto tempo você tem para preparar suas refeições diariamente? ⏲️",
    options: [
      { letter: "A", text: "Tempo limitado (preciso de refeições rápidas)" },
      { letter: "B", text: "Tempo moderado (posso cozinhar, mas com limitações)" },
      { letter: "C", text: "Tempo suficiente para preparar refeições complexas" },
    ],
  },
  {
    title: "Existe algum alimento que você realmente não gosta ou prefere evitar? ❌",
    options: [
      { letter: "A", text: "Carnes" },
      { letter: "B", text: "Vegetais" },
      { letter: "C", text: "Laticínios" },
      { letter: "D", text: "Ovo" },
      { letter: "E", text: "Nenhum" },
    ],
  },
];

export default questions;
