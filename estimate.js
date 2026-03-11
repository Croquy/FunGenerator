// ----------- CHIFFRAGE FLOU -----------

function generateEstimate(){

  const actions = [
    "Analyse exploratoire du besoin",
    "Alignement avec les parties prenantes",
    "Étude de faisabilité technique",
    "Affinage du périmètre fonctionnel",
    "Synchronisation avec les équipes transverses",
    "Stabilisation de l'environnement",
    "Clarification des dépendances externes"
  ];

  const complexite = [
    "faible",
    "modérée",
    "non négligeable",
    "élevée",
    "difficile à estimer",
    "potentiellement critique"
  ];

  const delais = [
    "1 à 2 jours",
    "2 à 4 jours",
    "3 à 6 jours",
    "1 à 2 semaines",
    "2 à 3 semaines",
    "variable selon les dépendances"
  ];

  const risques = [
    "Sous réserve d'une meilleure définition du besoin.",
    "Peut évoluer selon les arbitrages fonctionnels.",
    "Dépend fortement d'éléments encore inconnus.",
    "Une réévaluation pourra être nécessaire après cadrage.",
    "Estimation donnée à titre indicatif.",
    "Risque de dérive si le périmètre évolue."
  ];

  function r(arr){
    return arr[Math.floor(Math.random()*arr.length)];
  }

  const phrase =
    r(actions) + " : complexité " + r(complexite) +
    ". Estimation actuelle : " + r(delais) + ". " + r(risques);

  return phrase;
}
