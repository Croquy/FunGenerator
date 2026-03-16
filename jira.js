function generateTimesheet() {

  const intros = [
    "Ping discret mais insistant",
    "Annonce officielle du département productivité",
    "Message du bot comptable",
    "Rappel automatique non désactivable",
    "Alerte niveau modéré mais quand même",
    "Communication urgente du service administratif",
    "Info importante de la part de Jira lui-même",
    "Bulletin météo du reporting",
  ];

  const milieu = [
    "font la grève depuis lundi",
    "ont décidé de prendre des vacances sans prévenir",
    "flottent dans le néant administratif",
    "n'existent toujours pas officiellement",
    "se promènent quelque part entre hier et jamais",
    "ont été vues pour la dernière fois vendredi matin",
    "prennent la poussière dans un coin de ton cerveau",
    "se sentent profondément ignorées",
    "ont entamé une réflexion personnelle sur leur existence",
    "sont portées disparues depuis 48h",
    "refusent de s'afficher tant que tu ne les as pas saisies",
    "ont rejoint un syndicat et exigent d'être remplies",
    "contemplent le vide à ta place",
    "sont en train de rédiger une lettre de démission",
  ];

  const conclusions = [
    "Les managers deviennent nerveux.",
    "La direction prépare un regard désapprobateur.",
    "Les stats de fin de mois vont être improvisées.",
    "Quelqu'un va devoir inventer des chiffres.",
    "Le reporting avance sans toi, et ça se verra.",
    "Les dashboards affichent des trous béants.",
    "Ton team lead commence à combler les blancs tout seul.",
    "Le bilan mensuel va être créatif.",
    "Les chiffres du projet racontent une histoire alternative.",
  ];

  const emojis = ["⏳", "📊", "🧾", "⚠️", "🕒", "👀", "☕", "💻", "🪐", "📌"];

  return `
    <h2>${r(emojis)} ${r(intros)} :</h2>
    <p>Tes saisies de temps ${r(milieu)}. ${r(conclusions)}</p>
  `;
}