// ----------- CHIFFRAGE FLOU -----------

function generateEstimate(){
  const TJM = 890;

  
  const actions = [
    "Analyse exploratoire du besoin",
    "Alignement avec les parties prenantes",
    "Étude de faisabilité technique",
    "Affinage du périmètre fonctionnel",
    "Synchronisation avec les équipes transverses",
    "Stabilisation de l'environnement",
    "Clarification des dépendances externes",
     "Optimisation transverse du flux documentaire avec adaptation contextuelle non spécifiée.",
      "Mise en conformité évolutive d’un processus métier à définir ultérieurement.",
      "Intégration dynamique d’un module fonctionnel en environnement semi-identifié.",
      "Refonte partielle d’un workflow existant avec impacts potentiellement globaux.",
      "Implémentation agile d’une demande métier encore conceptuelle.",
      "Alignement stratégique d’un besoin exprimé oralement sans documentation associée."
  ];
    const complexities = [
      "Complexité estimée : Moyenne mais sensible aux variables invisibles.",
      "Complexité estimée : Faible en apparence, structurellement instable.",
      "Complexité estimée : Modérée avec dépendances implicites.",
      "Complexité estimée : Élevée selon ce que vous n’avez pas précisé.",
      "Complexité estimée : Variable selon la réalité terrain."
    ];
  const risques = [
    "Sous réserve d'une meilleure définition du besoin.",
    "Peut évoluer selon les arbitrages fonctionnels.",
    "Dépend fortement d'éléments encore inconnus.",
    "Une réévaluation pourra être nécessaire après cadrage.",
    "Estimation donnée à titre indicatif.",
    "Risque de dérive si le périmètre évolue.",
    "Non quantifiable à ce stade.",
    "Corrélé au niveau de précision initial."
  ];

    const politenessBonus = [
      "",
      "* Supplément de 15% applicable en cas de demande urgente sans contexte détaillé.",
      "* Majoration relationnelle appliquée si la demande initiale ne comporte ni description ni formule de courtoisie.",
      "* Ajustement tarifaire possible selon le niveau de flou détecté."
    ];

    function randomInt(min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }
  function r(arr){
    return arr[Math.floor(Math.random()*arr.length)];
  }
      const minDays = randomInt(5, 40);
      const maxDays = randomInt(minDays + 1, 75);

      const minBudget = minDays * TJM;
      const maxBudget = maxDays * TJM;

const phrase = `
<h1>Description :</h1>
<p>${r(actions)}</p>

<h2>Complexité :</h2>
<p>${r(complexities)}</p>

<h2>Estimation :</h2>
<p>entre ${minDays} et ${maxDays} jours ouvrés</p>

<h2>Budget prévisionnel :</h2>
<p>entre ${minBudget.toLocaleString()} € et ${maxBudget.toLocaleString()} €</p>

<h2>Risques :</h2>
<p>${r(risques)}</p>

<p>${r(politenessBonus)}</p>
`;
  return phrase;
}
