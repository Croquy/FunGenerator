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
    "la saisie de temps Jira",
    "ton timesheet",
    "les heures du jour",
    "les précieuses lignes Jira",
    "les temps passés"
  ];

  const actions = [
    "attend patiemment",
    "se sent abandonnée",
    "commence à paniquer",
    "observe le vide",
    "n’existe toujours pas"
  ];

  const consequences = [
    "Les managers deviennent nerveux.",
    "Un contrôleur de gestion pleure quelque part.",
    "Les serveurs Jira ressentent un grand vide.",
    "La comptabilité prépare déjà un regard désapprobateur.",
    "L'univers administratif est déséquilibré."
  ];

  const emojis = ["⏳","📊","🧾","⚠️","🕒","👀"];

  function pick(arr){
    return arr[Math.floor(Math.random()*arr.length)];
  }

  return `${pick(emojis)} ${pick(intros)} : ${pick(sujets)} ${pick(actions)}. ${pick(consequences)}`;
}
