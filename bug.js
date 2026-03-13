function generateBugReport() {

  const types = [
    "Bug critique", "Bug mineur", "Bug cosmique"
  ];

  const descriptions = [
    "L'application explose en confettis", "Les boutons dansent la samba", "Le texte se transforme en hiéroglyphes"
  ];

  const causes = [
    "Un alien a hacké le code", "Le café a court-circuité le serveur", "Un post-it a caché une ligne de code"
  ];

  const solutions = [
    "Redémarrer l'univers", "Négocier avec les pixels", "Offrir un sacrifice au dieu du code"
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