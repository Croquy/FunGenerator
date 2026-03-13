function generateMeeting() {

  const types = [
    "Réunion de crise", "Brainstorming intergalactique", "Point hebdomadaire"
  ];

  const objectifs = [
    "Sauver le monde du chaos bureaucratique", "Inventer la machine à café perpétuelle", "Discuter de la couleur des post-its"
  ];

  const participants = [
    "Le PDG, un robot et un chat", "Toute l'équipe plus un troupeau de licornes", "Seulement les plantes en pot"
  ];

  const ordreDuJour = [
    ["Point 1 : Discussion sur les licornes volantes", "Point 2 : Café ou thé ?", "Point 3 : Invasion alien"],
    ["Point 1 : Optimisation des post-its", "Point 2 : Machine à remonter le temps", "Point 3 : Pauses café infinies"],
    ["Point 1 : Couleur des bureaux", "Point 2 : Chats au travail", "Point 3 : Révolution bureaucratique"]
  ];

  const conclusions = [
    "On se revoit dans une autre dimension", "Décision unanime : plus de café", "Rien n'a été décidé, mais c'était fun"
  ];

  const linkedinConclusions = [
    "Très fier d'avoir participé à cette réunion transformative qui a révolutionné notre approche stratégique ! #Leadership #Innovation",
    "Quelle session inspirante ! Ensemble, nous avons repoussé les limites de l'impossible. #TeamWork #Vision",
    "Moment clé pour notre croissance : décisions audacieuses et synergies incroyables. #Business #Success"
  ];

  const emojis = ["📅","👥","💼","🗣️","⏰","📊","🤝","🎯"];

  const selectedOrdre = r(ordreDuJour);

  return `
    <h2>${r(emojis)} Réunion Absurde :</h2>
    <p><strong>Type :</strong> ${r(types)}</p>
    <p><strong>Objectif :</strong> ${r(objectifs)}</p>
    <p><strong>Participants :</strong> ${r(participants)}</p>
    <h3>Ordre du Jour :</h3>
    <ul>
      <li>${selectedOrdre[0]}</li>
      <li>${selectedOrdre[1]}</li>
      <li>${selectedOrdre[2]}</li>
    </ul>
    <p><strong>Conclusion :</strong> ${r(conclusions)}</p>
    <p><em>Version LinkedIn :</em> ${r(linkedinConclusions)}</p>
  `;
}