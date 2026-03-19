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
    "n'existent toujours pas",
    "sont portées disparues",
    "prennent la poussière",
    "ont été vues pour la dernière fois la semaine dernière",
    "ont rejoint un syndicat et exigent d'être remplies",
    "ont dû rédiger une lettre de démission",
    "ont entamé une réflexion personnelle sur leur existence",
    "restent uniquement dans ton esprit",
  ];

  const conclusions = [
    "du coup les stats de fin de mois vont être improvisées.",
    "donc le reporting avance sans toi, et ça se verra.",
    "alors les dashboards affichent des trous béants.",
    "et le bilan mensuel va raconter une histoire alternative.",
    "donc quelqu'un va devoir inventer des chiffres.",
    "et ton team lead commence à combler les blancs tout seul.",
    "donc la direction prépare un regard désapprobateur.",
    "alors les managers deviennent nerveux.",
    "et ça commence à se voir dans les stats.",
  ];

  const emojis = ["⏳", "📊", "🧾", "⚠️", "🕒", "👀", "☕", "💻", "🪐", "📌"];

  return `
    <h2>${r(emojis)} ${r(intros)} :</h2>
    <p>Tes saisies de temps ${r(milieu)}, ${r(conclusions)}</p>
  `;
}