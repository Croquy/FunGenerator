function generateTimesheet(){

  const intros = [
    "Petit rappel amical",
    "Annonce officielle du département productivité",
    "Notification intergalactique",
    "Message du futur",
    "Ping discret mais insistant",
    "Message du bot comptable"
  ];
  
const sujets = [
  "Tes saisies Jira",
  "Tes timesheets",
  "Tes heures du jour",
  "Tes précieuses lignes Jira",
  "Tes temps passés",
  "Tes entrées horodatées"
];

const actions = [
  "attendent patiemment ton retour",
  "se sentent abandies dans le néant",
  "commencent à paniquer comme des chats sous la pluie",
  "observant le vide intersidéral",
  "n’existent toujours pas mais ça fait peur",
  "pleurent un peu dans leur coin",
  "s'impatientent comme des cafés froids oubliés"
];

  const consequences = [
    "Les managers deviennent nerveux.",
    "Un contrôleur de gestion pleure quelque part.",
    "Les serveurs Jira ressentent un grand vide.",
    "La comptabilité prépare déjà un regard désapprobateur.",
    "L'univers administratif est déséquilibré.",
    "Ton chat se demande pourquoi tu n’es pas devant l’écran.",
    "Une dimension parallèle se met à tourner au ralenti."
  ];

  const anecdotes = [
    "On raconte qu'un développeur a oublié son timesheet et Jira a pleuré des larmes de code.",
    "Une fois, un timesheet oublié a provoqué la disparition mystérieuse de la dernière boîte de donuts du bureau.",
    "Chaque minute non saisie augmente la gravité du chaos administratif de 0.01%.",
    "Le café du matin se transforme en potion magique pour compléter tes heures.",
    "Même les plantes vertes du bureau commencent à demander des updates."
  ];

  const emojis = ["⏳","📊","🧾","⚠️","🕒","👀","☕","🌱","💻","🪐"];

  function pick(arr){
    return arr[Math.floor(Math.random()*arr.length)];
  }

  // on combine intro + sujet + action + anecdote + conséquence
  return `<h2>${r(emojis)} ${r(intros)} :</h2> <p>${r(sujets)} ${r(actions)}. ${r(anecdotes)} </p> <p>${r(consequences)}</p>`;
}
