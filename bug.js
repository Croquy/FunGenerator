function generateBugReport() {

  const types = [
    "Bug critique", "Bug mineur", "Bug cosmique", "Erreur dimensionnelle", "Bug intergalactique", "Glitch temporel"
  ];

  const descriptions = [
    "L'application explose en confettis", "Les boutons dansent la samba", "Le texte se transforme en hiéroglyphes",
    "Les icônes prennent vie", "Le serveur chante des berceuses", "Tout l'écran devient un miroir infini"
  ];

  const causes = [
    "Un alien a hacké le code", "Le café a court-circuité le serveur", "Un post-it a caché une ligne de code",
    "Un chat a marché sur le clavier sacré", "Les fantômes du code ancien se sont réveillés", "Le wifi a fait une sieste prolongée"
  ];

  const solutions = [
    "Redémarrer l'univers", "Négocier avec les pixels", "Offrir un sacrifice au dieu du code",
    "Chanter l'hymne du debug", "Faire une danse de patch magique", "Supprimer un bug fantôme"
  ];

  const emojis = ["🐞","💥","🔧","😱","🚨","📋","⚠️","🛠️"];

  return `
    <h2>${r(emojis)} Rapport de Bug :</h2>
    <p><strong>Type :</strong> ${r(types)}</p>
    <p><strong>Description :</strong> ${r(descriptions)}</p>
    <p><strong>Cause probable :</strong> ${r(causes)}</p>
    <p><strong>Solution proposée :</strong> ${r(solutions)}</p>
  `;
}